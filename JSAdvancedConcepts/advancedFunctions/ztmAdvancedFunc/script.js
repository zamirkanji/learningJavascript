const first = () => {
    const greet = "Hi"; //putting this INSIDE function makes greet local to function (scope) - everytime function is run, greet is created - if it didnt run everytime the variable would already exist and would create conflicts
    const second = () => {
        console.log(greet); //needs to remmeber what "greet" is, outside of function (in first())
    }
    return second;
}

const newFunc = first(); //assign variable to function rendering it a function... must be called like a function
newFunc();
first();
console.log(newFunc);

//CLOSURES - a function runs, the function executes ONCE, its never going to execute again, but its going to remember that there are references to those variables...
// So the child scope always has access to the parent scope... (greet in second() accessing greet in first() )
//Child scope has access to parent scope but parent scope doesn't have access to children (can go up but not down)


//CURRYING - changing function to only accept one parameter at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; //(one at a time)
console.log(curriedMultiply(3)); // (3) => (b) => 3 * b; //a = 3
console.log(curriedMultiply(4)(5)); // (4) => (5) => 4 * 5;
// why?
const mulitplyBy5 = curriedMultiply(5);
console.log(mulitplyBy5(5)); // 25


//COMPOSE 
const compose = (f, g) => (a) => f(g(a)); //f is function and g is also a function - f,g, a are all parameters - a(5) + g(5 (+ 1)) = 6 + f(+ 1) because sum = num (f, g) + 1
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5)); //f = sum , g = sum, a = 5
//f  //g //a


//Avoiding Side Effects - Functional Purity. (always want to return something in a function, a value)
let z = 1;
function x() {
    z = 2; //side effect (Affecting the outside world, outside the function)

    let y = 5;
    return y; // returning 
}
//By avoiding side effects and ALWAYS "returning" a value, we create determinism (Deterministic) - if we run a function 12 hundred million times, the returning VALUE is ALWAYS the same.