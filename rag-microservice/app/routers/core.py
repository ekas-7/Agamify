from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, List, Dict, Set
import os
import tempfile
import subprocess
import shutil
import re
import ast
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain.schema import Document
import logging

# Suppress FAISS info logs about missing GPU support
logging.getLogger("faiss").setLevel(logging.WARNING)

router = APIRouter()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class PlantUMLTreeRequest(BaseModel):
    git_url: str
    language: str
    code_folder: str
    auth_token: Optional[str] = None
    max_depth: Optional[int] = 5
    include_external: Optional[bool] = False

class CodeAnalyzer:
    """Handles code parsing and function extraction"""
    
    @staticmethod
    def post_process_plantuml(plantuml_code: str, functions: List[Dict]) -> str:
        """Post-process PlantUML code to fix common issues"""
        lines = plantuml_code.split('\n')
        processed_lines = []
        
        # Track component types for better classification
        component_files = set()
        for func in functions:
            if any(keyword in func['file'].lower() for keyword in ['component', 'page', 'layout']):
                component_files.add(func['file'])
        
        # Process each line
        for line in lines:
            # Fix naming conventions
            line = re.sub(r'Formatdate', 'FormatDate', line)
            line = re.sub(r'Handlemouse(\w+)', r'HandleMouse\1', line)
            
            # Ensure proper PlantUML syntax
            if '-->' in line:
                # Clean up arrow connections
                line = re.sub(r'\s+-->\s+', ' --> ', line)
            
            processed_lines.append(line)
        
        return '\n'.join(processed_lines)
    
    @staticmethod
    def extract_functions_python(code: str, filename: str) -> List[Dict]:
        """Extract function definitions and calls from Python code"""
        functions = []
        try:
            tree = ast.parse(code)
            for node in ast.walk(tree):
                if isinstance(node, ast.FunctionDef):
                    calls = []
                    for child in ast.walk(node):
                        if isinstance(child, ast.Call) and isinstance(child.func, ast.Name):
                            calls.append(child.func.id)
                    
                    functions.append({
                        "name": node.name,
                        "file": filename,
                        "calls": calls,
                        "line": node.lineno,
                        "type": "function"
                    })
        except SyntaxError:
            logger.warning(f"Syntax error in {filename}, skipping AST analysis")
        
        return functions
    
    @staticmethod
    def extract_functions_javascript(code: str, filename: str) -> List[Dict]:
        """Extract function definitions and calls from JavaScript/TypeScript code"""
        functions = []
        
        # Regex patterns for different function types
        patterns = {
            'function_declaration': r'function\s+(\w+)\s*\([^)]*\)\s*{',
            'arrow_function': r'(?:const|let|var)\s+(\w+)\s*=\s*(?:\([^)]*\)|[\w]+)\s*=>\s*{?',
            'method_definition': r'(\w+)\s*\([^)]*\)\s*{',
            'function_calls': r'(\w+)\s*\('
        }
        
        # Extract function definitions
        for pattern_type, pattern in patterns.items():
            if pattern_type != 'function_calls':
                matches = re.finditer(pattern, code, re.MULTILINE)
                for match in matches:
                    func_name = match.group(1)
                    line_num = code[:match.start()].count('\n') + 1
                    
                    # Find function calls within this function
                    calls = []
                    call_matches = re.finditer(patterns['function_calls'], code[match.start():])
                    for call_match in call_matches:
                        call_name = call_match.group(1)
                        if call_name != func_name and not call_name.startswith('console'):
                            calls.append(call_name)
                    
                    functions.append({
                        "name": func_name,
                        "file": filename,
                        "calls": list(set(calls)),  # Remove duplicates
                        "line": line_num,
                        "type": pattern_type
                    })
        
        return functions

class PlantUMLGenerator:
    """Handles PlantUML diagram generation"""
    
    @staticmethod
    def build_call_tree(functions: List[Dict], max_depth: int = 5) -> Dict:
        """Build a hierarchical call tree from function data"""
        func_map = {f["name"]: f for f in functions}
        call_tree = {}
        visited = set()
        
        def build_tree_recursive(func_name: str, depth: int = 0) -> Dict:
            if depth >= max_depth or func_name in visited or func_name not in func_map:
                return {}
            
            visited.add(func_name)
            func_data = func_map[func_name]
            node = {
                "name": func_name,
                "file": func_data["file"],
                "children": {}
            }
            
            for call in func_data["calls"]:
                if call in func_map:
                    node["children"][call] = build_tree_recursive(call, depth + 1)
            
            return node
        
        # Find entry points (functions not called by others)
        all_calls = set()
        for func in functions:
            all_calls.update(func["calls"])
        
        entry_points = [f["name"] for f in functions if f["name"] not in all_calls]
        
        # Build trees from entry points
        for entry in entry_points[:10]:  # Limit to top 10 entry points
            if entry not in visited:
                call_tree[entry] = build_tree_recursive(entry)
        
        return call_tree
    
    @staticmethod
    def tree_to_plantuml(call_tree: Dict, functions: List[Dict]) -> str:
        """Convert call tree to PlantUML syntax"""
        plantuml_lines = ["@startuml"]
        plantuml_lines.append("!theme plain")
        plantuml_lines.append("skinparam backgroundColor #FFFFFF")
        plantuml_lines.append("skinparam component {")
        plantuml_lines.append("  BackgroundColor #E1F5FE")
        plantuml_lines.append("  BorderColor #0277BD")
        plantuml_lines.append("}")
        plantuml_lines.append("")
        
        # Track processed nodes to avoid duplicates
        processed_nodes = set()
        connections = []
        
        # Create file-based grouping
        file_groups = {}
        for func in functions:
            file_name = os.path.basename(func['file']).replace('.', '_')
            if file_name not in file_groups:
                file_groups[file_name] = []
            file_groups[file_name].append(func['name'])
        
        # Add file packages
        for file_name, func_names in file_groups.items():
            plantuml_lines.append(f"package \"{file_name}\" {{")
            for func_name in func_names:
                if func_name not in processed_nodes:
                    # Determine component type based on function characteristics
                    func_data = next((f for f in functions if f['name'] == func_name), None)
                    if func_data:
                        if 'component' in func_data['file'].lower() or func_name.startswith(('use', 'Use')):
                            plantuml_lines.append(f"  component [{func_name}] as {func_name}")
                        elif 'util' in func_data['file'].lower() or any(keyword in func_name.lower() for keyword in ['format', 'parse', 'validate', 'handle']):
                            plantuml_lines.append(f"  class {func_name} {{")
                            plantuml_lines.append(f"    +{func_name}()")
                            plantuml_lines.append(f"  }}")
                        else:
                            plantuml_lines.append(f"  component [{func_name}] as {func_name}")
                    processed_nodes.add(func_name)
            plantuml_lines.append("}")
            plantuml_lines.append("")
        
        # Build connections from call tree
        def process_node_connections(node: Dict, parent_name: str = None):
            current_name = node["name"]
            
            if parent_name and parent_name != current_name:
                connection = f"{parent_name} --> {current_name}"
                if connection not in connections:
                    connections.append(connection)
            
            for child_name, child_node in node.get("children", {}).items():
                if child_node:  # Only process non-empty children
                    process_node_connections(child_node, current_name)
        
        # Process all trees to build connections
        for root_name, root_node in call_tree.items():
            if root_node:
                process_node_connections(root_node)
        
        # Add connections
        plantuml_lines.extend(connections)
        plantuml_lines.append("")
        plantuml_lines.append("@enduml")
        
        return "\n".join(plantuml_lines)

@router.post("/plantuml-tree", response_model=dict, summary="Generate a PlantUML function call tree from a repo using enhanced RAG")
async def plantuml_tree(request: PlantUMLTreeRequest):
    """
    Clone the repo, analyze code structure, and generate a PlantUML function call tree.
    
    Enhanced LLM Workflow:
    1. Code Extraction: Clone repo and extract relevant source files
    2. Static Analysis: Parse code to identify functions and their relationships
    3. RAG Enhancement: Use vector store to find related code patterns and dependencies
    4. Tree Construction: Build hierarchical call tree with configurable depth
    5. PlantUML Generation: Convert tree structure to PlantUML format
    6. LLM Refinement: Use LLM to enhance and validate the generated tree
    
    Request body example:
    {
      "git_url": "https://github.com/your/repo.git",
      "language": "nextjs",
      "code_folder": "src",
      "auth_token": "ghp_xxx",  // optional
      "max_depth": 5,           // optional, default 5
      "include_external": false // optional, include external lib calls
    }
    """
    temp_dir = tempfile.mkdtemp()
    
    try:
        # Step 1: Clone repository
        logger.info(f"Cloning repository: {request.git_url}")
        clone_url = request.git_url
        if request.auth_token:
            clone_url = clone_url.replace('https://', f'https://{request.auth_token}@')
        
        subprocess.run(["git", "clone", clone_url, temp_dir], check=True, capture_output=True)
        code_path = os.path.join(temp_dir, request.code_folder)
        
        # Step 2: Build project if needed
        if request.language.lower() in ["js", "javascript", "ts", "typescript", "node", "nextjs"]:
            logger.info("Installing dependencies and building project")
            try:
                subprocess.run(["npm", "install"], cwd=code_path, check=True, capture_output=True, timeout=300)
                subprocess.run(["npm", "run", "build"], cwd=code_path, check=False, capture_output=True, timeout=300)
            except (subprocess.TimeoutExpired, subprocess.CalledProcessError) as e:
                logger.warning(f"Build step failed: {e}, continuing with analysis")
        
        # Step 3: Extract and analyze code
        logger.info("Extracting and analyzing code files")
        all_functions = []
        code_documents = []
        llm_summaries = []  # For LLM-processed code summaries

        file_extensions = {
            "python": [".py"],
            "javascript": [".js", ".jsx"],
            "typescript": [".ts", ".tsx"],
            "nextjs": [".js", ".jsx", ".ts", ".tsx"]
        }.get(request.language.lower(), [".js", ".ts", ".jsx", ".tsx", ".py"])

        # LLM for code summarization before embedding
        embedding_llm = ChatOpenAI(
            model="gpt-3.5-turbo",
            temperature=0.1,
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )

        for root, _, files in os.walk(code_path):
            for file in files:
                if any(file.endswith(ext) for ext in file_extensions):
                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, code_path)
                    try:
                        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                            content = f.read()
                        # Static analysis
                        if file.endswith((".py",)):
                            functions = CodeAnalyzer.extract_functions_python(content, relative_path)
                        else:
                            functions = CodeAnalyzer.extract_functions_javascript(content, relative_path)
                        all_functions.extend(functions)
                        # --- LLM Summarization for Embedding ---
                        summary_prompt = f"""
Summarize the following code for semantic search and retrieval. Focus on describing its purpose, key functions, and relationships. Be concise and accurate.\n\nFile: {relative_path}\n\nCode:\n{content[:2000]}\n"""
                        summary_result = embedding_llm.invoke(summary_prompt)
                        summary = summary_result.content.strip()
                        llm_summaries.append({
                            "file": relative_path,
                            "summary": summary
                        })
                        # Prepare for RAG (use summary for embedding)
                        code_documents.append(Document(
                            page_content=summary,
                            metadata={"file": relative_path, "type": "summary"}
                        ))
                    except Exception as e:
                        logger.warning(f"Error processing {file_path}: {e}")
        
        if not all_functions:
            return JSONResponse(content={"error": "No functions found in the codebase"}, status_code=400)
        
        # Step 4: Enhanced RAG Analysis
        logger.info("Building RAG context for enhanced analysis")
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=2000,
            chunk_overlap=300,
            separators=["\n\nclass ", "\n\nfunction ", "\n\ndef ", "\n\nconst ", "\n\n"]
        )
        
        # Split documents while preserving function boundaries
        split_docs = text_splitter.split_documents(code_documents)
        
        # Create vector store
        embeddings = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))
        vector_store = FAISS.from_documents(split_docs, embeddings)
        
        # Step 5: Build initial call tree
        logger.info("Building function call tree")
        call_tree = PlantUMLGenerator.build_call_tree(all_functions, request.max_depth)
        initial_plantuml = PlantUMLGenerator.tree_to_plantuml(call_tree, all_functions)

        # Step 6: LLM Enhancement (combine structure + semantic context)
        logger.info("Combining structure and semantic context with LLM analysis")
        structure_llm = ChatOpenAI(
            model="gpt-4o",
            temperature=0.1,
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )
        retriever = vector_store.as_retriever(search_kwargs={"k": 5})

        # Use both the call tree and the top semantic summaries for context
        semantic_context = "\n\n".join([s["summary"] for s in llm_summaries[:10]])
        structure_prompt = PromptTemplate(
            template="""
You are an expert software architect. Your task is to generate a PlantUML call graph that accurately represents ONLY the real, code-based relationships (calls, uses, imports, data flow) between all functions, components, hooks, utilities, and APIs in the codebase.

Inputs:
- Initial PlantUML call tree: {initial_plantuml}
- Function summary: {function_summary}
- Semantic code summaries: {semantic_context}
- Additional context: {context}

Instructions:
- Focus on actual relationships: function calls, component usage, hook invocation, utility usage, API handler connections, and data flow as found in the code and context.
- Do NOT invent or hallucinate any relationships. Only include what is supported by the code or summaries.
- Clearly show direct and indirect call chains and usage links.
- Use PlantUML syntax: @startuml ... @enduml, with --> for calls/uses, ..> for data flow, o--> for optional.
- Group by file/module if possible, but prioritize showing relationships.
- Output only the PlantUML diagram, no extra explanation.
""",
            input_variables=["initial_plantuml", "function_summary", "semantic_context", "context"]
        )
        qa_chain = RetrievalQA.from_chain_type(
            llm=structure_llm,
            retriever=retriever,
            return_source_documents=True
        )
        function_summary = f"Found {len(all_functions)} functions across {len(set(f['file'] for f in all_functions))} files."
        context_query = f"function calls relationships dependencies {request.language}"
        context_result = qa_chain.invoke({"query": context_query})
        context = context_result["result"]
        # Generate enhanced PlantUML with detailed analysis
        enhancement_result = structure_llm.invoke(
            structure_prompt.format(
                initial_plantuml=initial_plantuml,
                function_summary=function_summary,
                semantic_context=semantic_context,
                context=context
            )
        )
        # Clean up and validate the result
        enhanced_plantuml = enhancement_result.content.strip()
        if not enhanced_plantuml.startswith("@startuml"):
            enhanced_plantuml = initial_plantuml
        # Post-process to fix common issues
        enhanced_plantuml = CodeAnalyzer.post_process_plantuml(enhanced_plantuml, all_functions)
        logger.info("Analysis complete")
        return JSONResponse(content={
            "plantuml": enhanced_plantuml,
            "metadata": {
                "total_functions": len(all_functions),
                "total_files": len(code_documents),
                "language": request.language,
                "entry_points": len([f for f in all_functions if f["name"] not in 
                                   {call for func in all_functions for call in func["calls"]}])
            }
        })
        
    except subprocess.CalledProcessError as e:
        logger.error(f"Git/Build error: {e}")
        return JSONResponse(content={"error": f"Repository processing failed: {str(e)}"}, status_code=500)
    
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return JSONResponse(content={"error": f"Analysis failed: {str(e)}"}, status_code=500)
    
    finally:
        # Cleanup
        if os.path.exists(temp_dir):
            shutil.rmtree(temp_dir)