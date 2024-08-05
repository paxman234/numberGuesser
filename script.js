let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
     secretTargetNum = Math.floor(Math.random() * 10);
     return secretTargetNum;
}
targetNum = generateTarget();
function compareGuesses(userGuess, compGuess, targetNum) {
    // const technicalLoss = 'You were further, which means you lose, by technicality.';
    // const technicalWin = 'You were closer, which means you win, by technicality.';
    if(userGuess === targetNum || compGuess === targetNum) 
    {
        console.log('There\'s a winner...');
        if(userGuess === targetNum) 
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
        var userDistance = userGuess - targetNum;
        var compDistance = compGuess - targetNum;
        console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
        if (compDistance > userDistance) 
        {
            
            return 'human';
        }
        else {
            return 'computer';
        }
    }
    else if(compGuess < targetNum && userGuess < targetNum) 
    {
        var userDistance = targetNum - userGuess;
        var compDistance = targetNum - compGuess;
        console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
        if (compDistance > userDistance) 
            {
                
                return 'human';
            }
            else 
            {
                return 'computer';
            }
    }
    else if (compGuess < targetNum && userGuess > targetNum) 
    {
        var userDistance = userGuess - targetNum;
        var compDistance = targetNum - compGuess;
        console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
        if (compDistance > userDistance) 
            {
                
                return 'human';
            }
            else 
            {
                return 'computer';
            }
    }
    else if (compGuess > targetNum && userGuess < targetNum) 
        {
            var userDistance = targetNum - userGuess;
            var compDistance = compGuess - targetNum;
            console.log(`Your guess: ${userGuess} \nYour opponents guess: ${compGuess}\n\nThe target: ${targetNum}`);
            if (compDistance > userDistance) 
                {
                    
                    return 'human';
                }
                else 
                {
                    return 'computer';
                }
        }
    else {
        return 'I lose! There\'s a bug in this program! Bah Humbug!';
    }
    
}
function updateScore(whoWon) {
    let humanScore = 0;
    let computerScore = 0;
    if(whoWon === 'human') {
        humanScore++;
    }
    if(whoWon === 'computer') {
        computerScore++;
    }
}
const advanceRound = (currentRoundNumber) => currentRoundNumber++;