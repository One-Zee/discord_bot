/**
 * Loading utills
 */
 const { winner , computerPlay } = require('../utills/game'); // Loading game logic.
 const { HELP , ARGS } = require('../utills/messages'); // Loading RPS_BOT respond messages
 const { getMessageArgs } = require('../utills/helper');

 const { PREFIX }  = require('../../config'); // Loading config values.


exports.cmd_resolver = async ( message ) => {
    const [ CMD_NAME , ...args ] = getMessageArgs( message.content , PREFIX );
    if(CMD_NAME === 'help'){
        await message.channel.send( HELP );
    }
    if( CMD_NAME === 'play' ){
        if( args.length === 0 ){
            await message.reply( ARGS.MISS )
        }else if( args[0] === 'rock' || args[0] === 'paper' || args[0] === 'scissors' ){
            await message.reply( 'Game ON!!' )
            const bot = computerPlay();
            const player = args[0];
            const win = winner(player,bot);
            await message.channel.send('Bot played: ' + bot);
            await message.channel.send(win);

        }else{
            await message.reply( ARGS.WRONG );
        }
    }
}