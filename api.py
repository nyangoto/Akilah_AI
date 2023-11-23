from fastapi import FastAPI
from langserve import add_routes
import uvicorn
from rag_feat.main import search_index

embeddings = OpenAIEmbeddings(openai_api_key=open_ai)

app = FastAPI(
  title="LangChain Server",
  version="1.0",
  description="A simple api server using Langchain's Runnable interfaces",
)
add_routes(
    app,
    ChatAnthropic(),
    path="/anthropic",
)




if __name__ == "__main__":

    uvicorn.run(app, host="localhost", port=8000)