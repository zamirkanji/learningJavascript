// let + const


//let creates child scope inside of IF Statement...var does not (only can create scope inside function with var)
//anytime a "let" variable is wrapped around a curly bracket, it creates a new scope
//var only creates scope inside functions 
//let creates scope inside any curly brackets

const player = "hobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}
console.log("outside", wizardLevel);
experience = 80;
console.log(experience); // 80
// player = "sport"; //won't work 

const player1 = "hobby";
let experience1 = 100;
var wizardLevel1 = false;

if (experience1 > 90) {
  var wizardLevel1 = true;
  console.log("inside", wizardLevel1); // true 
}
//anytime a "let" variable is wrapped around a curly bracket, it creates a new scope
console.log("outside", wizardLevel1); // true (gets changed to true inside the "if statement")



//two type of function...should be "const" if it's not going to change 
function newFunc(item) {
  console.log(item);
}

//then nobody can assigns something to "newFunc2"
const newFunc2 = function (item2) {
  console.log(item2);
}



//can't assign "obj" the variable to something else, but CAN assign obj.property to something... 
const obj = {
  playerDest: "Zamir",
  experienceDest: 100,
  wizardLevelDest: false,
  anotherOject: {
    fullName: "Zamir Kanji"
  },
  anArrayExample: ["fruit", "ice cream", "quesadilla"]
}
obj.experienceDest = 101;
console.log(`${obj.anotherOject.fullName} likes ${obj.anArrayExample}`);
// Destructuring

const playerD = obj.playerDest;
const experienceD = obj.experienceDest;
const wizardLevelD = obj.wizardLevelDest;
// new way to do it/too much typing above (grabbing both properties from obj object)
const {playerDest, experienceDest} = obj;
let {wizardLevelDest} = obj;
//then you can just use the specific object anywhere in the codebase, instead of having to create a varialble and grab the property from the obj


//new way of declaring object properties
const name = "John Snow";
const sixty = 60;
const nine = 9;

const obj2 = {
  [name]: "Zamir",
  ["Ray" + "Smith"]: "Hello!",
  [1 + 2]: "Quick Maffs",
  [sixty + nine]: "Hehehe"
}
console.log(obj2);


//adding variable declorations to an object
const a = "Simon";
const b = true;
const c = {};

const obj3 = {
  a, b, c
} //simon, true, {}


//Template Strings
//string + dynamic values, expressions, and variables within the string. 
const z = "Zamir";
const k = "Kanji";
const age = 26;
const greetingFull = (`Hello, ${z} ${k}, how are you? You are age ${age}.`);

console.log(greetingFull);



//default arguments 
function greet(name = "zamir", age = 30, pet = "cat") {
  return `yo ${name}...you are age ${age} and you have a ${pet}!`;
}
console.log(greet());
// console.log(pet); //wouldn't work because "pet" is only declared as a default argument inside the scope of the greet() function.
console.log(greet("john", 50, "monkey")); //default arguments get ignored because you are passing it new arguments... 
// default arguments only work if someone calls function with no arguments... nice to have so function call doesn't fail.


//JS Type - Symbol
let symbol = Symbol();
let symbol2 = Symbol("foo");
let symbol3 = Symbol("foo");
console.log(symbol);
console.log(symbol2);
console.log(symbol3);
console.log(symbol2 == symbol3); //false ---- used to create completely unique type --- so there's never any conflict between (mostly) object properties 



//Arrow Functions 
function add(a, b) {
  return a + b
}
console.log(add(60, 9))
//turns into 
const addArrow = (a, b) => a + b;
//this works also
const addArrow2 = (a, b) => {
  return a + b;
}
