//ES7 - 2016 (Two editions to the language)

//includes 
const pets = ["cat", "dog", "bat", "fish"];
console.log(pets.includes("dog")); //true
console.log(pets.includes("bird")); //false

//Exponential operator (**)
const square = (x) => x ** 2;
console.log(square(5));

const cube = (y) => y ** 3;
console.log(cube(4))

//Exercise for ES7

// #1) Check if this array includes the name "John"
const dragons = ["Tim", "Johnathan", "Sandy", "Sarah"];
console.log(dragons.includes("John")); //false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.

//find() method - returns the value of the first element in the provided array that satisfies the provided testing function
const findJohn = dragons.find(a => a.includes("John"));
console.log(findJohn); //Johnathan

//some() method - tests whether at least one element in the array passes the test implemented by the provided function (returns boolean)

const someJohn = (el) => el.includes("John");
console.log(dragons.some(someJohn)); //true

//filter 
const filterJohn = dragons.filter(function (arrEl) {
    return arrEl.includes("John");
})
console.log(filterJohn); // ["Johnathan"]
console.log(...filterJohn); // Johnathan (spread operator)

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
function power(arg) {
    return arg ** 100;
}

console.log(power(10000));

// #4) Using your function from #3, put in the paramter 10000. What is the result?

const maxNumber = Math.pow(10, 1000); //highest possible number in JS
console.log(maxNumber);