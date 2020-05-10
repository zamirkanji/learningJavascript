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
// startGameBtn.addEventListener("click", startGame);
// startGameBtn.addEventListener("click", function () { //anonymous function
//     console.log("Game is starting...");
// }); //addeventlistener method attached to object



//Declaration - hoisted to top, can be declared anywhere in the file
function multiply(a, b) {
    return a * b;
}
// expression - hoisted to top but not initialized/defined, cant be declared anywhere in the file before it is made 
const add = function (a, b) {
    return a + b;
}


//DEFAULT ARGUMENTS
const defaultEx = (a = 10) => console.log(a);

defaultEx(); //returns 10 if no argument is passed through as a parameter

//REST parameter

//could have an array and add them all up with a for of loop
const sumUp = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum;
}

// sumUp(1, 5, 10, 15, 30, -6);
console.log(sumUp([1, 5, 8, 69])); // 83


//rest operator - builds an array inside the function with all of the arguments called into the function 
const sumUp2 = (a, ...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num
    }
    return sum;
}

console.log(12, sumUp2(1, 8, 4, 29)); //42
// console.log(subtractUp(420, 69));











//function keyword function - has a "arguments" variable 
//takes all arguments - same thing as rest operator 

// const subtractUp = function (resultHandler, ...numbers) {
//     let sum = 0;
//     // for (const num of arguments) { //dont use this keyword
//     //     sum += num
//     // }
//     for (const num of numbers) { //dont use this keyword
//         sum -= num;
//     }

//     // return sum;
//     resultHandler(sum);
// }







//example - function inside function/BIND()
const funcInside = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    numbers.map(num => {
        if (operation === "ADD") {
            sum += validateNumber(num); //is "num" zero? otherwise keep it 
        } else {
            sum -= validateNumber(num);
        }
    })
    // return sum;
    resultHandler(sum);
}


//callback func - callback function is called for you by something else - cant control when its called - you dont know when the click occures (addEventListener("click"))
const showResult = (result, messageText) => {
    console.log(messageText + ` ${result}`)
};


//outputs
console.log(funcInside(showResult.bind(this, "The result after adding all numbers is"), "ADD", 3, 9, -7, 0, "hehe")); // 5 - no error
//showResult is "resultHandler" argument - as a callback function
// "ADD" is the operation argument in funcInside
// then whatever numbers are left get added to the array rest parameter (operator)

// console.log(subtractUp(showResult, 19, 34, 984)); // still says "adding all numbers" (instead of subtracting)

console.log(funcInside(showResult.bind(this, "The result after subtracting all numbers is"), "SUBTRACT", 19, 34, 984)); // still says "adding all numbers" (instead of subtracting)





//BIND() - ANOTHER EXAMPLE
let c1 = {
    x: 5,
    y: 10
};

let c2 = {
    x: 75,
    y: 235
};

const printCoordinates = () => {
    console.log(this.x + ", " + this.y); //this refers to each object (c1, or c2) passed into this function (printC) with BIND
}

let c1_func = printCoordinates.bind(c1); //bind c1 to printCoordinates
c1_func();
// console.log(c1_func);
let c2_func = printCoordinates.bind(c2);
c2_func();