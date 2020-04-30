const startGameBtn = document.getElementById("start-game");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

let gameIsRunning = false;

const getPlayerChoice = () => {
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


startGameBtn.addEventListener("click", function () {
    if (gameIsRunning) {
        return; // doesn't start new games
    }

    gameIsRunning = true; //when the button clicks
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice()
    console.log(playerSelection);
})