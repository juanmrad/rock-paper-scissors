var content = document.getElementById('content');

var rockPaperScissors = {
    player: 'ROCK',
    computer: 'Scissors',
    winner: 'You Win!'
}

content.innerHTML = renderGame(rockPaperScissors);

function playGame(player) {
    rockPaperScissors.player = player;
    let computer = computerPick();
    selectWinner(player, computer);
}

function computerPick() {
    let options = ['ROCK', 'PAPER', 'SCISSORS'];

    // random choose an option.
    // Math.random will give a number between 0 and 1 as a float. if multiplied by 2
    // this number will be between 0 and 2. and I parse as int to remove any decimals.
    let randomNumber = Math.random();

    // change selection on view.
    if (randomNumber < 0.33) {
        rockPaperScissors.computer = options[0];
    } else if (randomNumber < 0.67) {
        rockPaperScissors.computer = options[1];
    } else {
        rockPaperScissors.computer = options[2];
    }


    return options[randomNumber];
}

function selectWinner(player, computer) {
    // Rock beats scissor
    // Paper beats Rock
    // Scissors beats paper.
    // if they are same it is a tie.

    if (player == computer) {
        rockPaperScissors.winner = `It's a Tie!`;
    } else if (
        (player == 'ROCK' && computer == 'SCISSORS') ||
        (player == 'PAPER' && computer == 'ROCK') ||
        (player == 'SCISSORS' && computer == 'PAPER')) {
        rockPaperScissors.winner = `You Win!`;
    } else {
        rockPaperScissors.winner = `You Lost!`;
    }

    content.innerHTML = renderGame(rockPaperScissors);
}


function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary" onclick="playGame('ROCK')" id="rock-button">Rock</button>
                <button class="btn btn-primary" onclick="playGame('PAPER')" id="paper-button">Paper</button>
                <button class="btn btn-primary" onclick="playGame('SCISSORS')" id="scissors-button">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>${game.player}</b></div>
                <div class="m-5">The computer played: <b>${game.computer}</b></div>
            </div>
            <h1 class="text-center">${game.winner}</h1>
        </div>
    `
}