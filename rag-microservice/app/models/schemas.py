from typing import List, Dict, Optional
from pydantic import BaseModel

class CodeAnalysisRequest(BaseModel):
    code: str
    framework: str

class MigrationRequest(BaseModel):
    source_code: str
    source_framework: str
    target_frameworks: List[str]
    preserve_structure: bool = True
    include_comments: bool = True

class MigrationResponse(BaseModel):
    translated_code: Dict[str, str]  # framework -> code
    dependency_changes: List[str]
    warnings: List[str]
    confidence_score: float

class ComponentTranslationRequest(BaseModel):
    component_code: str
    source_framework: str
    target_framework: str

class MermaidTreeRequest(BaseModel):
    git_url: str
    language: str
    code_folder: str
    auth_token: Optional[str] = None