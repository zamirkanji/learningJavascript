//Type Coercion - converting one type to another type (Excplicit vs Implicit)
//Always use === unless you have a good reason not to 

console.log(1 == "1"); //converts string "1" to number 1
console.log(1 === "1"); // strict (explicit) doesn't try and convert the value

if (1) { //coerces 1 to equal true
    console.log(5);
}
if (0) { //coerces 0 to equal false
    console.log(5);
}

console.log(-0 === +0); //true
console.log(Object.is(-0, +0)); //false

console.log(NaN === NaN); //false?
console.log(Object.is(NaN, NaN)); //true