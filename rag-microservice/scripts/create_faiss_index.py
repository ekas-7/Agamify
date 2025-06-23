from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
import os

# Example documents for the initial index (replace with your real docs)
docs = [
    "def main():\n    funcA()\n    funcB()",
    "def funcA():\n    funcC()",
    "def funcB():\n    funcD()",
    "def funcC():\n    pass",
    "def funcD():\n    pass"
]

embeddings = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))
vector_store = FAISS.from_texts(docs, embeddings)
vector_store.save_local("./data/embeddings")
print("FAISS index created at ./data/embeddings")
