/**
 * Loading app dependencies.
 */
const { Client , Intents } = require('discord.js');

const { DISCORD_BOT_TOKEN , intents , PREFIX } = require('./config'); // Loading config values.
const { cmd_resolver } = require('./src/cmd/commmand'); 
const client = new Client( { intents: [Intents.FLAGS.GUILDS] , intents } ); // Initializing discord client.

/**
 * Listening to # Discord # events
 */
client.on('ready', ( message ) => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", async ( message ) => { // Listening to event "messageCreate" and responds to RPS_BOT commands.
    if ( message.author.bot ) return false; // Checks if message author is bot.
    
    console.log(`Message from ${message.author.username}(${message.author.tag}): '${message.content}' ,senderId: ${message.author.id}`);

    if( message.content.startsWith( PREFIX ) ){
        cmd_resolver(message);
    }
});

require('./server')(); // Starting express server

client.login( DISCORD_BOT_TOKEN ); // Client login