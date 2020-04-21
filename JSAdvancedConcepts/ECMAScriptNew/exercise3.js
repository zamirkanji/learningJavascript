// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// let + const CHANGED
let a = 'test';
const b = true;
const c = 789;
a = 'test2';



// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// Destructuring CHANGED
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, eyeColor} = person;
let {age} = person;
//now can use "age" and "firstName" "lastName" "eyeColor" as variables 



// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// Object properties CHANGED
var okObj = {a, b, c};
console.log(okObj); //test, true, 789



// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
// Template strings CHANGED
const firstName = "Zamir";
const city = "Seattle";
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;



// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// default arguments CHANGED
// default age to 10;
function isValidAge(age=10) {
    return age
}
//or 
const isValidAge = (age=10) => age; //same thing as returning age



// Symbol ADDED
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first Symbol");



// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
// Arrow functions CHANGED
// const whereAmI = (username, location) => whereAmI(username && location) ? "I am not lost" : "I am totally lost";
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}