/**
 * Function that returns game result.
 */
const winner = (player,computer) => {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
       return 'Tie';
    }
    else if(player === 'rock'){
        if(computer === 'paper'){
            return 'Bot Won';
            //computerScore++;

        }else{
            return 'You Won'
            //playerScore++;
        }
    }
    else if(player === 'scissors'){
        if(computer === 'rock'){
            return 'Bot Won';
            //computerScore++;
        }else{
            return 'You Won';
            //playerScore++;
        }
    }
    else if(player === 'paper'){
        if(computer === 'scissors'){
            return 'Bot Won';
            //computerScore++;
        }else{
            return 'You Won';
            //playerScore++;
        }
    }
}

/**
 * Returns random hand.
 * @returns { String } 'rock' || 'paper' || 'scissors'
 */
const computerPlay = () =>{
    const options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random() * options.length)]
}

module.exports = { winner , computerPlay }