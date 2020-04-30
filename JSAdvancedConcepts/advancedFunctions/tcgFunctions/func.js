//functions vs methods
const startGameBtn = document.getElementById("start-game"); //startgameBtn is object


const startGame = () => {
    console.log("hello there");
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

startGameBtn.addEventListener("click", startGame); //addeventlistener method attached to object