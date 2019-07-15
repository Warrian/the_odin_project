let choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let winner = '';

        winner = playRound(choice.id, computerPlay())

        if (winner !== '' && winner !== undefined) {
            alert(`${winner} WINS!`);
            location.reload();
        }
    })
})

function playRound(playerSelection, computerSelection) {
    let playerWins;
    let draw;
    let result;
    let winner;
    let rounds = 5;
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
        playerScore.textContent++;
    }
    else if (draw) {
        result = `IT'S A TIE! ${playerSelection} equals ${computerSelection}`;
    }
    else {
        result = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
        computerScore.textContent++;
    }

    let scoreContainer = document.querySelector('#score');

    if (!document.querySelector('#result-container')) {
        let resultContainer = document.createElement('div');
        resultContainer.setAttribute('id', 'result-container');
        resultContainer.innerText = `${result}`;
        scoreContainer.parentNode.insertBefore(resultContainer, scoreContainer);
    }

    let resultContainer = document.querySelector('#result-container');
    resultContainer.innerText = `${result}`;
    resultContainer.setAttribute('style', 'margin-top: 20px; margin-bottom: -20px')

    let divPlayerSelection = document.querySelector('#div-player-selection');
    divPlayerSelection.innerText = `${playerSelection}\n`;

    let divComputerSelection = document.querySelector('#div-computer-selection');
    divComputerSelection.innerText = `${computerSelection}\n`;

    if (computerScore.textContent == rounds) {
        winner = 'Computer';
    }
    else if (playerScore.textContent == rounds) {
        winner = 'Player';
    }

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