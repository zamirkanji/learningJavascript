const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

//for loop
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//forEach
basket.forEach(item => {
    console.log(item);
})

//while
//do...while

//for of loop
//iterating - arrays, strings
for (let item of basket) {
    console.log(item);
}
for (let item of "zamir") {
    console.log(item);
}
//cant iterate over object

//for in loop
//enumerating (enumerable) - Objects - allows us to see the properties 
for (let item in detailedBasket) {
    console.log(item); //keys (properties)
}
//enumerating over the elements in the array 
for (let element in basket) {
    console.log(element);
}


//Exercises 

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    for (let el of arr) {
        return Math.max(...arr); //spread operator (array to just numbers)
    }
}

function biggestNumberInArray2(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        return Math.max(...arr);
    }
}

function biggestNumberInArray3(arr) {
    let i = 0;
    let arrayLength = arr.length;

    while (i < arrayLength) {
        return Math.max(...arr);
    }
}

console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray2(array));
console.log(biggestNumberInArray3(array));


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}



function checkBasket(basket, lookingFor) {
    // console.log(Object.entries(basket));

    for (let item in basket) {
        console.log(item);
        // item === lookingFor ? true : console.log("Item not in basket!");
    }

    // Object.entries(basket) === lookingFor ? true : false;
}

checkBasket(amazonBasket, "glasses");