"""
This is the place to connect the post request of the API
All you need is to feed the user request in to the search_index() function the return the `result` back
you can comment query = str(input("Ask Something:  ")) after testing

"""

import os
from rag_feat.main import search_index
from langchain.embeddings.openai import OpenAIEmbeddings
from fastapi import FastAPI
from langserve import add_routes
import uvicorn
# from fastapi import APIRouter
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.models import OpenAPI
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.responses import JSONResponse


open_ai= os.getenv("OPENAI_API_KEY")

embeddings = OpenAIEmbeddings(openai_api_key=open_ai)

# query = str(input("Ask Something:  "))

# results = search_index(query, embeddings)

# answer = results["answer"]
# confidence_score = results["score"]

# print(f"Answer: {answer}\n\nConfidence Score: {confidence_score}")

description = """
API endpoint for the RAG application

## chat
Initiate search and retrieval for the rag application
You can pass in a **query** to the endpoint to retrieve results for
"""
app = FastAPI()
# router = APIRouter()
# prompt = "{question}"
# add_routes(
#     app,
#     search_index(prompt, embeddings),
#     path="/chat",
# )
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    query: str

@app.post("/chat/")
async def chat(query: Item):
    """
    Input a search query to search and retrieve answers from documents

    :param query: The input query from the user
    :return: A response, answer gotten from retrieving information from documents
    """
    results = search_index(query.query, embeddings)
    return results["answer"]

@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html():
    return get_swagger_ui_html(openapi_url="/openapi.json", title="API documentation")

@app.get("/openapi.json", response_model=OpenAPI)
async def get_openapi():
    return JSONResponse(content=app.openapi())

# app.include_router("/chat")

if __name__ == "__main__":

    uvicorn.run(app, host="0.0.0.0", port=8000)
