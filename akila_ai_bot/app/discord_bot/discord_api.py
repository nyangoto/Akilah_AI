from dotenv import load_dotenv
import  discord
import os

load_dotenv()

discord_token = os.getenv('DDISCORD_TOKEN')

class MyClient(discord.Client):
    async def on_ready(self):
        print(self.user," is Online")


    async def on_message(self, message):
        print(message.content)
        if(message.author == self.user):
            return 
        command, user_message = None, None

        for text in ['/ai', '/bot', '/chatgpt', '/akilah', 'akila']:
            if message.content.startswith(text):
                command=message.content.split(' ')[0]
                user_message=message.content.replace(text, '')
                print(command, user_message)
        
        if command == 'ai' or command == 'bot' or command == 'chatgpt' or command == 'akilah' or command == 'akila':
            bot_res = chatgpt_res(prompt=user_message)
            await message.channel.send(f'Answer: {bot_res}')

intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
