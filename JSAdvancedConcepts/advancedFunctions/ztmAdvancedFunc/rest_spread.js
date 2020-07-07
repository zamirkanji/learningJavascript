//Rest Parameters - takes all arguments and puts them into an array inside the function

function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(sumAll(1)); //1
console.log(sumAll(1, 2)); //3
console.log(sumAll(1, 2, 3)); //6


//Spread Operator - spreads out an array

let array = [5, 10, 20];

console.log(Math.max(...array));