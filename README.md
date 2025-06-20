# Agamify
**Multi Web Framework Builder Agent + Function Visualizer**

## Abstract

This project introduces an intelligent agent designed to migrate web application code across multiple frontend frameworks, streamlining cross-framework development and modernization workflows. The Multi Web Framework Builder Agent + Function Visualizer takes a single-source codebase—originally written in frameworks such as React, Vue, Angular, Svelte, or Next.js—and automatically translates it into semantically equivalent implementations in all other supported frameworks. 

This migration preserves functionality, component structure, and application logic, enabling seamless interoperability and comparative analysis. Accompanying this migration capability is a powerful Function Visualizer, which performs static analysis on the original and translated code to generate interactive visualizations of function call graphs, component hierarchies, and data flow relationships. This aids in understanding complex logic, debugging discrepancies between framework implementations, and ensuring fidelity across translations.

By combining LLM-based transformation with visual introspection, the system supports use cases ranging from legacy migration and framework benchmarking to educational exploration and rapid prototyping. The platform not only reduces the manual overhead of rewriting applications but also deepens developers' cross-framework insight through a unified, visual, and explainable interface.

## Abstract Architecture 

![Architecture Diagram](https://github.com/user-attachments/assets/0672cc8d-7462-482e-94fe-894b9a23445d)

### Supported Frameworks
<p  > The tool supports the following frameworks for both input and cross-framework migration: </p> <p align="center"> 
  <img src="https://github.com/user-attachments/assets/db0e4b06-646f-4c50-820c-5cd7a7c0734e" alt="Supported Frameworks" /> </p>

## Workflow

### Cross-Framework Migration Pipeline (via DOM + RAG + Transpilation)

#### 1. Language Identification (Deterministic Check)
Statistically or syntactically determine the source programming language and framework of the input codebase with high confidence using AST analysis and rule-based heuristics.

#### 2. Dependency-Aware Language Rebuild
Construct the logical representation of the app by analyzing dependencies (components, functions, styles, etc.) to create an optimal import graph. This ensures a modular and minimal rebuild structure.

#### 3. Transpile to Vanilla JavaScript/HTML (Intermediate Form)
Convert the framework-specific code (e.g., React, Vue) to a vanilla JavaScript and DOM-equivalent form, serving as a common language-neutral representation.

#### 4. RAG-Based Component Mapping
Use a Retrieval-Augmented Generation (RAG) system to map semantic structures (like lifecycle hooks, props, bindings) from the original framework to equivalent concepts in target frameworks. This ensures high-fidelity transformations.

#### 5. DOM Crawler Construction
Build a DOM crawler to traverse and extract leaf-to-root relationships of rendered components, collecting both structure and behavioral metadata from the vanilla intermediate.

#### 6. Functional DOM Visualizer
Render an interactive visual tree of the application's DOM and component structure, enriched with metadata such as event handlers, state bindings, and data flows for each node.

#### 7. Leaf-to-Root Conversion Pipeline
Begin translation from the leaf nodes (atomic components/functions) and recursively build toward the root. This approach maintains dependency integrity and ensures correct resolution order.

#### 8. Modular Code Generation (Target Framework)
Generate modular, idiomatic code for the target framework by assembling translated components based on the dependency tree, preserving the structure and functionality of the original application.

### Outcome
A fully migrated, modular, and maintainable codebase in one or more target web frameworks (e.g., from React → Vue, Angular, Svelte, etc.), with visual verification and explainability built into the process.

## RAG Pipeline for Framework-to-Framework Code Migration

### Purpose
To enable accurate and explainable translation of frontend application code from one framework to others using a combination of retrieval (knowledge base of framework patterns, idioms, lifecycle hooks, etc.) and generation (LLM-based transformation).

### 1. Input Processing
- **Input**: Source code (e.g., React project)
- **Goal**: Extract all relevant code artifacts (components, state logic, lifecycle methods, routing config)
- **Tooling**: AST parsers (e.g., Babel, ts-morph), dependency resolver, file tree scanner

### 2. Document Chunking (Knowledge Base Construction)

#### Sources:
- Documentation from target frameworks (Vue, Angular, Svelte, etc.)
- Real-world code examples (component structures, routing, state management)
- Migration guides and lifecycle equivalency mappings

#### Chunks:
- Lifecycle equivalence mappings (e.g., `componentDidMount` → `onMounted`)
- Syntax patterns (JSX → Vue templates, directives, bindings)
- Behavior mappings (e.g., `useState` vs reactive data)

#### Format and Storage:
- **Format**: Structured JSON or Markdown embeddings
- **Storage**: FAISS / Chroma / Weaviate embedding store

### 3. Query Generation (From Code)
Generate queries such as:
- "How do I migrate useEffect to Angular?"
- "What is the equivalent of React props in Svelte?"
- "How is component composition done in Vue?"

Each component, hook, and function can create one or more semantic queries using natural language + code prompt hybrid queries.

### 4. Retrieval (Context Injection)
- Retrieve top-k relevant chunks from the embedding store using vector search (e.g., OpenAI embeddings or custom)
- Inject retrieved documents into prompt for the LLM
- Apply ranking and deduplication (optional)

### 5. LLM-Based Generation
Use OpenAI GPT-4.5, Claude, or Mixtral to:
- Translate the structure of components
- Convert syntax (JSX → SFC, template → TS class, etc.)
- Preserve logic, data flow, and comments

#### Prompt includes:
- Retrieved context (docs, patterns)
- Source code snippet
- Target framework and constraints

**Example prompt:**
> Given the following React component and context about Vue.js, convert this to a modular Vue 3 SFC. Preserve logic, props, state, and effects. Output only code.

### 6. Validation & Feedback
Use static analysis tools to validate:
- Correctness of generated code
- Presence of lifecycle/state mappings
- Modular structure adherence
- Optionally, round-trip validate by re-transpiling to intermediate form

### 7. Visual DOM + Function Mapping
Use visual graph of DOM and component tree as:
- Verification aid
- Traversal strategy for leaf-to-root generation
- Map each DOM node and its logic to its generated equivalent in the new framework

### 8. Output
- Modular codebase in target framework
- Side-by-side diff or visualization between source and target
- Optional zip/export or Git integration
