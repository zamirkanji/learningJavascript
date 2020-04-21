//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const oneFunc = (z, c) => z + c;
console.log(oneFunc(60, 9));

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3)); // 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); //31


//Currying: What does the last line return?
const sum2 = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5); //a=5
console.log(add5(12)); //17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const addOne = (num) => num + 1;
const addFive = (num) => num + 5;
console.log(compose(addOne, addFive)(10)); //16

//What are the two elements of a pure function?
// ---> no side effects and function always return the same value every time it is run
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.