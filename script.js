let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
     secretTargetNum = Math.floor(Math.random() * 10);
     return secretTargetNum;
}
function compareGuesses(userGuess, compGuess, targetNum) {
    var winner = '';
    if((userGuess === targetNum.toString()) && compGuess === targetNum) 
    {
        console.log('You both got the number - have a point each.');
        console.log(`computer guess: ${compGuess}\nyour guess: ${userGuess}\n\ntarget ${targetNum}`);
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
        console.log(`Your guess was ${userDistance} off.\nYour opponents guess was ${compDistance}\n off the target ${targetNum}`);
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
    else {
        return 'I lose! There\'s a bug in this program! Bah Humbug!';
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
const advanceRound = () => currentRoundNumber++;

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