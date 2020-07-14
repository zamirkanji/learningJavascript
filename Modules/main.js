//Modules are like buildings blocks - different pieces of code, each piece is good at doing one specific thing 
//Webpack gets rid of script tags in the index.html

//ES6 + Webpack2

//JS 1
// export const add = (a, b) => a + b;
//OR
// export default function add() {
//     return a + b;
// }

// //JS 2
// import { add } from './add';
// //OR
// import add from './add';


import User, { printName, printAge as printUserAge } from "./user.js"

const user1 = new User("Zamir", 26);

console.log(user1);
printName(user1);
printUserAge(user1);