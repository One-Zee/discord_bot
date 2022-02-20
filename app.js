const { Client , Intents } = require('discord.js');
const { DISCORD_BOT_TOKEN } = require('./config');
const { winner , computerPlay } = require('./utills/game');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] ,intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return false;
    
    console.log(`Message from ${message.author.username}(${message.author.tag}): '${message.content}' ,senderId: ${message.author.id}`);
    let msg = message.content.toLowerCase().split(' ');
    console.log(msg);
    if(msg[0]==='<@!944676336092475432>' && msg[1] === 'rock' || msg[1] === 'paper' || msg[1] === 'scissors'){
        await message.reply('Game ON!!')
        const bot = computerPlay();
        const player = msg[1];
        const win = winner(player,bot);
        await message.reply('Bot played: ' + bot);
        await message.reply(win);
    }
    if(msg[0] === 'hello'){
        await message.react('🤔');
        await message.reply(`Welcome ${message.author.username} to our server.`);
    }
    if(msg[0] === 'help'){
        await message.reply(`This is ROCK PAPER SCISSORS bot.
To play the game you must tag a bot and write your hand ex: @R-P-S_bot#2708 rock`);
    }
});

client.login(DISCORD_BOT_TOKEN)