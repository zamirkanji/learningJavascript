const conditional = (num) => {
    if (num > 18) {
        console.log("HOWUDOIN");
    } else if (num < 18) {
        console.log("Too young");
    } else {
        console.log("thats not even a number!");
    }
}
conditional(23);

//ternary in a function
const ternarey = (num) => num > 21 ? console.log("you can drink ") : "you can't drink";
ternarey(24);


// const askAge = () => {
//     const ask = prompt("What is your age?");
//     const age = Number(ask);
//     const simple = () => {
//         age > 21 ? console.log("you can drink") :
//             age < 21 ? console.log("you can't drink") :
//                 console.log("thats not even a number!");
//     }
//     simple();
// }
// askAge();



// function goesToBar(boolean) {
//     return boolean;
// }


// const isUserAllowed = () => age > 21 ? confirmAge(true) : confirmAge(false);
// const confirmAge = (boolean) =>
//     (confirmAge(true)) ? console.log("You can drink!") :
//         (confirmAge(false)) ? console.log("You cant drink!") :
//             console.log("That's not a number!");

// isUserAllowed();



// simple();