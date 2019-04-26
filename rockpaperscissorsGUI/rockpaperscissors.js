let choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playRound(choice.id, computerPlay())
    })
})

function playRound(playerSelection, computerSelection) {
    let playerWins;
    let draw;
    let result;
    let winner;
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection != computerSelection) {
        switch (playerSelection) {
            case "ROCK":
                if (computerSelection == "SCISSORS")
                    playerWins = true;
                break;
            case "PAPER":
                if (computerSelection == "ROCK")
                    playerWins = true;
                break;
            case "SCISSORS":
                if (computerSelection == "PAPER")
                    playerWins = true;
                break;
        }
    }
    else {
        draw = true;
    }

    let playerScore = document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');

    if (playerWins) {
        result = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
        playerScore.textContent++;
    }
    else if (draw) {
        result = `IT'S A TIE! ${playerSelection} equals ${computerSelection}`;
        winner = "draw";
    }
    else {
        result = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
        computerScore.textContent++;
    }

    let scoreContainer = document.querySelector('#score');
    
    if (!document.querySelector('#result-container'))
    {
        let resultContainer = document.createElement('div');
        resultContainer.setAttribute('id', 'result-container');
        resultContainer.innerText = `${result}`;
        scoreContainer.parentNode.insertBefore(resultContainer, scoreContainer);
    }
    
    let resultContainer = document.querySelector('#result-container');
    resultContainer.innerText = `${result}`;
    
    let divPlayerSelection = document.querySelector('#div-player-selection');
    divPlayerSelection.innerText = `${playerSelection}\n`;

    let divComputerSelection = document.querySelector('#div-computer-selection');
    divComputerSelection.innerText = `${computerSelection}\n`;
    
    return winner;
}

function computerPlay() {
    let methodValue1 = Math.random() * 3;
    let random = Math.floor(methodValue1);
    let choice = '';

    switch (random) {
        case 0:
            choice = "ROCK";
            break;
        case 1:
            choice = "PAPER";
            break;
        case 2:
            choice = "SCISSORS";
            break;
    }

    return choice;
}
