//Modules are like buildings blocks - different pieces of code, each piece is good at doing one specific thing 
//Webpack gets rid of script tags in the index.html

//ES6 + Webpack2

//JS 1

//OR
// export default function add() {
//     return a + b;
// }

// //JS 2
import { add } from './user.js';

console.log(add(4, 5));
// //OR
// import add from './add';

import { functionModule } from "./3.js";
functionModule();


import User, { printName, printAge as printUserAge } from "./user.js"

const user1 = new User("Zamir", 26);

console.log(user1);
printName(user1);
printUserAge(user1);