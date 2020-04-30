//LOGICAL OPERATORS
// == check for value equality
// === check for strict variable type of equality 
// != check for value inequality
// !== "    "
// ! check if NOT true
// > & < or <= >=
// && and or ||

//CONDITIONAL STATEMENTS
//if else if else
//switch


//comparing obj and arrays
const obj1 = {
    name: "Zam"
}
const obj2 = {
    name: "Zam"
}
console.log(obj1 == obj2); //false
const obj3 = obj1;
console.log(obj3 === obj1); // true
console.log(obj1.name == obj2.name); // true


const hobbies = ["gaming", "coding", "photography"];
const hobbies2 = ["gaming", "coding", "photography"];
hobbies === hobbies2; // false - arrays are objects



//Falsy and Truthy values - just a single value variable in a condition without a comparison operator - converts to true or false: 
// 0 is false
// any other number true
// empty string "" false
// any other non-empty string is true
//{}, [] all true
// null, undefined, NaN all false
const nameInput = "Zam"

if (nameInput === "Zam") { } //works
if (nameInput) { } //works

const numberZero = 0; // zero is false
if (numberZero) { } //false
const anyNumber = -12; // any other number is true
if (anyNumber) { } //true

let userInput = prompt("pick a number");
const num = Number(userInput);
console.log(num);
if (!num) {
    console.log("thats a zero chief");
} else {
    console.log("thats a truthy value!");
}