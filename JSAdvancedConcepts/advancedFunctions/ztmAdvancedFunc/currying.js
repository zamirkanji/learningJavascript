//
const q = (a) => a(); //executes function s()
const s = () => console.log("Hello");
q(s);

//
const n = (a) => a; //executes function y
const y = (z) => console.log("Hello", z);
n(y("Zam"));

//
const b = (o) => o("z"); //executes function k()
const k = (l) => console.log("Wazzup", l);
b(k);

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); //31

//Currying: What does the last line return?
const sum2 = (a, b) => a + b;
const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5); //a=5
console.log(add5(12)); //17

//CURRYING - changing function to only accept one parameter at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; //(one at a time)
console.log(curriedMultiply(3)); // (3) => (b) => 3 * b; //a = 3
console.log(curriedMultiply(4)(5)); // (4) => (5) => 4 * 5;
// why?
const mulitplyBy5 = curriedMultiply(5);
console.log(mulitplyBy5(5)); // 25