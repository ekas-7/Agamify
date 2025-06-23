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

router = APIRouter()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class MermaidTreeRequest(BaseModel):
    git_url: str
    language: str
    code_folder: str
    auth_token: Optional[str] = None
    max_depth: Optional[int] = 5
    include_external: Optional[bool] = False

class CodeAnalyzer:
    """Handles code parsing and function extraction"""
    
    @staticmethod
    def post_process_mermaid(mermaid_code: str, functions: List[Dict]) -> str:
        """Post-process mermaid code to fix common issues"""
        lines = mermaid_code.split('\n')
        processed_lines = []
        
        # Track component types for better classification
        component_files = set()
        for func in functions:
            if any(keyword in func['file'].lower() for keyword in ['component', 'page', 'layout']):
                component_files.add(func['file'])
        
        # Improve node classification
        for line in lines:
            if ':::component' in line and any(keyword in line.lower() for keyword in ['handle', 'format', 'parse', 'validate']):
                line = line.replace(':::component', ':::util')
            elif ':::component' in line and 'if[' in line.lower():
                line = line.replace(':::component', ':::util')
            
            # Fix naming conventions
            line = re.sub(r'Formatdate', 'FormatDate', line)
            line = re.sub(r'Handlemouse(\w+)', r'HandleMouse\1', line)
            
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

class MermaidGenerator:
    """Handles mermaid diagram generation"""
    
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
    def tree_to_mermaid(call_tree: Dict) -> str:
        """Convert call tree to mermaid syntax"""
        mermaid_lines = ["graph TD"]
        node_counter = 0
        node_map = {}
        
        def add_node(name: str, file: str = "") -> str:
            nonlocal node_counter
            if name not in node_map:
                node_id = f"node{node_counter}"
                node_counter += 1
                node_map[name] = node_id
                # Clean name for display
                display_name = name.replace("_", " ").title()
                if file:
                    display_name += f"<br/><small>{os.path.basename(file)}</small>"
                mermaid_lines.append(f'    {node_id}["{display_name}"]')
            return node_map[name]
        
        def process_node(node: Dict, parent_id: str = None):
            current_id = add_node(node["name"], node.get("file", ""))
            
            if parent_id:
                mermaid_lines.append(f"    {parent_id} --> {current_id}")
            
            for child_name, child_node in node.get("children", {}).items():
                if child_node:  # Only process non-empty children
                    process_node(child_node, current_id)
        
        # Process all trees
        for root_name, root_node in call_tree.items():
            if root_node:
                process_node(root_node)
        
        return "\n".join(mermaid_lines)

@router.post("/mermaid-tree", response_model=dict, summary="Generate a mermaid.js function call tree from a repo using enhanced RAG")
async def mermaid_tree(request: MermaidTreeRequest):
    """
    Clone the repo, analyze code structure, and generate a mermaid.js function call tree.
    
    Enhanced LLM Workflow:
    1. Code Extraction: Clone repo and extract relevant source files
    2. Static Analysis: Parse code to identify functions and their relationships
    3. RAG Enhancement: Use vector store to find related code patterns and dependencies
    4. Tree Construction: Build hierarchical call tree with configurable depth
    5. Mermaid Generation: Convert tree structure to mermaid.js format
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
        
        file_extensions = {
            "python": [".py"],
            "javascript": [".js", ".jsx"],
            "typescript": [".ts", ".tsx"],
            "nextjs": [".js", ".jsx", ".ts", ".tsx"]
        }.get(request.language.lower(), [".js", ".ts", ".jsx", ".tsx", ".py"])
        
        for root, _, files in os.walk(code_path):
            for file in files:
                if any(file.endswith(ext) for ext in file_extensions):
                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, code_path)
                    
                    try:
                        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                            content = f.read()
                            
                        # Static analysis
                        if file.endswith(('.py',)):
                            functions = CodeAnalyzer.extract_functions_python(content, relative_path)
                        else:
                            functions = CodeAnalyzer.extract_functions_javascript(content, relative_path)
                        
                        all_functions.extend(functions)
                        
                        # Prepare for RAG
                        code_documents.append(Document(
                            page_content=content,
                            metadata={"file": relative_path, "type": "source_code"}
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
        call_tree = MermaidGenerator.build_call_tree(all_functions, request.max_depth)
        initial_mermaid = MermaidGenerator.tree_to_mermaid(call_tree)
        
        # Step 6: LLM Enhancement
        logger.info("Enhancing tree with LLM analysis")
        llm = ChatOpenAI(
            model="gpt-3.5-turbo",
            temperature=0.1,
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )
        
        # Create retrieval QA chain
        retriever = vector_store.as_retriever(search_kwargs={"k": 5})
        
        enhancement_prompt = PromptTemplate(
            template="""
            You are analyzing a React/JavaScript codebase to improve a function call tree diagram.
            
            Current Mermaid diagram:
            {initial_mermaid}
            
            Function summary:
            {function_summary}
            
            Context from codebase:
            {context}
            
            Please enhance this mermaid diagram by:
            1. Adding missing parent-child relationships (App → AccountProvider → Messenger → ChatDialog)
            2. Properly classifying nodes:
               - Components (React components): use :::component class
               - Hooks (useXxx functions): use :::hook class  
               - Utilities (helper functions): use :::util class
            3. Adding proper styling classes:
               - classDef component fill:#e1f5fe,stroke:#01579b,stroke-width:2px;
               - classDef hook fill:#f3e5f5,stroke:#4a148c,stroke-width:2px;
               - classDef util fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px;
            4. Ensuring proper React component hierarchy is maintained
            5. Fixing naming conventions (camelCase for functions)
            
            Return only the enhanced mermaid code block (starting with 'graph TD'):
            """,
            input_variables=["initial_mermaid", "function_summary", "context"]
        )
        
        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            retriever=retriever,
            return_source_documents=True
        )
        
        # Prepare function summary
        function_summary = f"Found {len(all_functions)} functions across {len(set(f['file'] for f in all_functions))} files."
        
        # Get relevant context
        context_query = f"function calls relationships dependencies {request.language}"
        context_result = qa_chain({"query": context_query})
        context = context_result["result"]
        
        # Generate enhanced mermaid with detailed analysis
        enhancement_result = llm.predict(
            enhancement_prompt.format(
                initial_mermaid=initial_mermaid,
                function_summary=function_summary,
                context=context
            )
        )
        
        # Clean up and validate the result
        enhanced_mermaid = enhancement_result.strip()
        if not enhanced_mermaid.startswith("graph"):
            enhanced_mermaid = initial_mermaid
        
        # Post-process to fix common issues
        enhanced_mermaid = MermaidGenerator.post_process_mermaid(enhanced_mermaid, all_functions)
        
        logger.info("Analysis complete")
        
        return JSONResponse(content={
            "mermaid": enhanced_mermaid,
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