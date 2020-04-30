//functions vs methods
const startGameBtn = document.getElementById("start-game"); //startgameBtn is object


const startGame = () => {
    console.log("Game is starting...");
}

function start() {
    console.log("Function Declaration");
}

const person = {
    name: "Zam",
    greet: function greet() { //method - function attached to object
        console.log("Hello There!");
    }
};

person.greet();

console.log(typeof startGame); //not executing bc you would get typeof whatever function returns
console.dir(startGame); // function is an object (special type with preconfigured properties)


//passing a reference to a function (startGame() or anonymous func below to another function: addEvenetListener())
startGameBtn.addEventListener("click", startGame);
startGameBtn.addEventListener("click", function () { //anonymous function
    console.log("Game is starting...");
}); //addeventlistener method attached to object



//Declaration - hoisted to top, can be declared anywhere in the file
function multiply(a, b) {
    return a * b;
}
// expression - hoisted to top but not initialized/defined, cant be declared anywhere in the file before it is made 
const add = function (a, b) {
    return a + b;
}

