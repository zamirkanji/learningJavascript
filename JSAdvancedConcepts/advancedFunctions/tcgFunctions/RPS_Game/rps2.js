const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");


const showPlayerInput = document.getElementById("player-result");
const showCompInput = document.getElementById("computer-result");
const showWinner = document.getElementById("winner");

const startGameBtn = document.getElementById("start-game");

// form options
const form = document.querySelector(".formInput");

const submitBtn = document.getElementById("submit-btn");


const orClickText = document.getElementById("or-click");

//button options
const choiceBtns = document.querySelector(".button-options");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");






const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;


//show game options 
const showGame = () => {
    form.classList.remove("vis-Hidden");
    form.classList.add("showGame");
    choiceBtns.classList.remove("vis-Hidden");
    choiceBtns.classList.add("showGame");
    orClickText.classList.remove("vis-Hidden");
    orClickText.classList.add("showGame");
}


//get player input from form 
const getPlayerInputForm = () => { //arrow function
    const playerInput = document.getElementById("playerChoice").value;

    if (
        playerInput !== ROCK &&
        playerInput !== PAPER &&
        playerInput !== SCISSORS
    ) {
        alert("Invalid Choice! We chose Rock for you!");
        return DEFAULT_USER_CHOICE;
    }
    return playerInput;
}


// get btn input 
// const getBtnInput = () => {

// }


//randomize computer choice and return it 
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

//compare choices from either btn/form input and computer choice
const determineWinner = (cChoice, pChoice) => {
    return cChoice === pChoice ? RESULT_DRAW :
        cChoice === ROCK && pChoice === PAPER || // conditional
            cChoice === SCISSORS && pChoice === ROCK || //conditional
            cChoice === PAPER && pChoice === SCISSORS
            ? PLAYER_WINS : COMPUTER_WINS;
}



const gameisStarting = () => {
    const gameStarting = document.getElementById("game-Starting");
    gameStarting.textContent = "Game is starting...";
}


//starting game... show game options
startGameBtn.addEventListener("click", () => {

    if (gameIsRunning) {
        return; // doesn't start new games
    }
    gameIsRunning = true; //when the button clicks
})

startGameBtn.addEventListener("click", function () {
    showGame();
})





const getInput = () => {

}



//get random choice from getComputerChoice function and store in variable to pass into determine winner function as an argument for "cChoice"



//submit player section from INPUT FORM
submitBtn.addEventListener("click", function () {
    const playerSelection = getPlayerInputForm();
    showPlayerInput.textContent = `Player Chooses ${playerSelection}`;

    const computerChoice = getComputerChoice();
    showCompInput.textContent = `Computer Chooses ${computerChoice}`;

    const winner = determineWinner(computerChoice, playerSelection);
    showWinner.textContent = `RESULT: ${winner}`;
});

