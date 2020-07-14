// //JS 2
// import { add } from './add';
// //OR
// // import add from './add';

// console.log(add(4, 5));



export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`)
}
export function printAge(user) {
    console.log(`User's name is ${user.age}`)
}

// export default User
// export {printName, printAge}