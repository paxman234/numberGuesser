let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let incrementRound = true;

function generateTarget() {
     secretTargetNum = Math.floor(Math.random() * 10);
     return secretTargetNum;
}
function compareGuesses(userGuess, compGuess, targetNum) {
    var winner = '';
    incrementRound = true;
    if(userGuess.length < 2 && userGuess >= 0) 
        {
        if((userGuess === targetNum.toString()) && compGuess === targetNum) 
            {
                console.log(`You both got the number - have a point each.\ncomputer guess: ${compGuess}\nyour guess: ${userGuess}\n\ntarget ${targetNum}`);
                humanScore++;
                computerScore++;
                return "tie";
            }
        else if((userGuess === targetNum.toString()) || compGuess === targetNum) 
        {
            console.log('There\'s a winner...');
            if(userGuess === targetNum.toString()) 
            {
                return 'human';
            }
            else if(compGuess === targetNum) 
            {
                return 'computer';
            }  
        }
        else if(compGuess > targetNum && userGuess > targetNum) 
        {
            console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
            winner = getAbsoluteDistance(userGuess - targetNum, compGuess - targetNum);
            return winner;
        }
        else if(compGuess < targetNum && userGuess < targetNum) 
        {
            console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
            winner= getAbsoluteDistance(targetNum - userGuess, targetNum - compGuess);
            return winner;
        }
        else if (compGuess < targetNum && userGuess > targetNum) 
        {
            console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
            winner = getAbsoluteDistance(userGuess - targetNum, targetNum - compGuess);
            return winner;
        }
        else if (compGuess > targetNum && userGuess < targetNum) 
        {
            console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
            winner = getAbsoluteDistance(targetNum - userGuess, compGuess - targetNum);
            return winner;
        }
    }
    else {
        incrementRound = false;
        return alert('Please select a value that is less than 10 and more than 0!');
    }
    
}

function updateScore(winner) {
    switch(winner) 
    {
        case 'human':
            humanScore ++;
            break;
        case 'computer':
            computerScore ++;
            break;
        case 'tie':
            return confirm('No winner, It\'s a Tie!');
        default:
            return console.log('Ready for another round? Let\'s Go!');
    }
}
const advanceRound = () => (incrementRound) ? currentRoundNumber++ : currentRoundNumber;

function getAbsoluteDistance(userDistance, compDistance) 
{
    if (compDistance > userDistance) 
        {
            return 'human';
        }
    else if (userDistance > compDistance)
        {
            return 'computer';
        }
    else 
    {
        return 'tie';
    }
}