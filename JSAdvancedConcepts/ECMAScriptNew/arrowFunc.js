// let func = (argument1, argument2, ...argN) => expression 

// which would be the shorter version of ....

// let func = function(arg1, arg2, ...argN) {
//     return expression;
//   };


// example 1 (normal - with two args)
const exampleFunc = (a, b) => a + b; //ommit curly braces
console.log(exampleFunc(60, 9));

const oneArg = y => y; // dont need paranthesis or curly braces, return keyword is implied (with only one expression - return y)

// example 2 (with curly brackets)
const exampleFunc2 = (c, d) => {
    return c * d;
}
console.log(exampleFunc2(23, 3));

// example 3 (multi-line with conditional)
let ageAsk = prompt("What is your age?");
let newAge = Number(ageAsk);
let welcome = (newAge > 21) ?
    () => alert("Hello! ;)") :
    () => alert("ooooh yeah about that");
console.log(welcome());

// example 4 (no argument)
let sayHi = () => console.log("Hi!");
console.log(sayHi());
