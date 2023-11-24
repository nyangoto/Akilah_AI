from discord_bot.akila_discord_bot import client

token = os.getenv("DISCORD_TOKEN")
if __name__ == "__main__":
    client.run(token)