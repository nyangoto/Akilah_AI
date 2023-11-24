import discord
import requests
from langchain.embeddings.openai import OpenAIEmbeddings
from rag_feat.main import search_index


intents = discord.Intents.default()
intents.message_content = True

token = "MTE3Njk2OTcxMDU0NjQ1NjcxOA.G9zo6B.rQhNz1MZuJfFsCHlWsCt0ifC18Jb-hI0qXf7hA"
open_ai=os.getenv("OPENAI_API_KEY")

embeddings = OpenAIEmbeddings(openai_api_key=open_ai)
# openai.api_key = 'ADD_YOUR_API_KEY_HERE'

client = discord.Client(intents=intents)
url = 'http://127.0.0.1:8000/chat/'

   
headers={"Content-Type": "application/json", "access-Contron-Allow-Origin": "http://127.0.0.1:8000"}

@client.event
async def on_ready():
    print("we have logged in as {0.user}".format(client))


@client.event
@client.event
async def on_message(message):
    username = str(message.author).split('#')[0]
    command, user_message = None, None

    if message.channel.name == client.user:
        return

    if message.channel.name == 'inbox':
        user_message = str(message.content)
        channel = str(message.channel.name)

        query = user_message
        response = results = search_index(query, embeddings)
        output = response["answer"] + ",  Confidence " + str(response["score"])
        await message.channel.send(response)
    elif message.channel.name == 'testing':
        user_message = str(message.content)
        channel = str(message.channel.name)

        print(username + " said " + user_message.lower() + " in " + channel)
        query = user_message
        response = results = search_index(query, embeddings)
        output = response["answer"] + ",  Confidence " + str(response["score"])

      
        await message.channel.send(output)
    else:
        commands = ['\toggleactive', '\ping']
        for text in commands:
            if message.content.startswith(text):
                command = message.content.split(" ")[0]
                user_message = message.content.replace(text, '')
        if command == '\toggleactive' or command == '\akilah':
            query = user_message
            response = results = search_index(query, embeddings)
            output = response["answer"] + ",  Confidence " + str(response["score"])
            await message.channel.send(response)






#client.run(token)