require('dotenv').config()

module.exports = {
    DISCORD_BOT_TOKEN:process.env.DISCORD_BOT_TOKEN,
    intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
    PREFIX: '?'
}