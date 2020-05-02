const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");
const winner = document.getElementById("winner");
const playerInput = document.getElementById("playerChoice").value;

const choiceBtns = document.querySelector(".button-options");


const startGameBtn = document.getElementById("start-game");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = () => { //arrow function
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, "").toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert("Invalid Choice! We chose Rock for you!");
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}


const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67 && randomValue > 0.35) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

// const determineWinner = (cChoice, pChoice) => {
//     if (cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === SCISSORS && pChoice === ROCK ||
//         cChoice === PAPER && pChoice === SCISSORS) {
//         return PLAYER_WINS;
//     } else {
//         return COMPUTER_WINS;
//     }
// }


const determineWinner = (cChoice, pChoice) => {
    return cChoice === pChoice ? RESULT_DRAW :
        cChoice === ROCK && pChoice === PAPER || // conditional
            cChoice === SCISSORS && pChoice === ROCK || //conditional
            cChoice === PAPER && pChoice === SCISSORS
            ? PLAYER_WINS : COMPUTER_WINS;
}

// const showBtnsClass = () => {
//     choiceBtns.classList.remove("vis-Hidden");
//     choiceBtns.classList.add("showBtns");
// }

// startGameBtn.addEventListener("click", showBtnsClass);

startGameBtn.addEventListener("click", () => {

    if (gameIsRunning) {
        return; // doesn't start new games
    }
    gameIsRunning = true; //when the button clicks
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    console.log(`Player Chooses ${playerSelection}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer Chooses ${computerChoice}`);
    const winner = determineWinner(computerChoice, playerSelection);
    console.log(`RESULT: ${winner}`);
})