// *******reference type******** - obj created by the programmer (non-primitive type, not defined by the programming languages) 
// Primitive types (numbers, null, strings, booleans, undefined) are defined by the programming language...
[] === []; //false - arrays are objects (creating their own box)
[1] === [1];
let obj1 = { value: 10 };
let obj2 = obj1; //obj2 references obj1
let obj3 = { value: 10 };

console.log(obj1 === obj2); //true 
console.log(obj1 === obj3); //false ? (own boxes)

obj1.value = 15; //changing the contents of the figurative "box" (contents inside obj1 box)
console.log(obj2.value); // 15 (bc obj2 = obj1)
console.log(obj3.value); // 10




// *********context vs scope*********
function b() {
    let a = 4;
}
// console.log(a); //reference error because of scope (created inside any curly braces)

// this  - what is the OBJECT environment we're in right now? What is to the left of the "."
console.log(this); //inside the window object
console.log(this === window); //true
console.log(this.console.log("yo!"));

//example 1
const a = () => console.log(this);
a(); //logs the "Window" obj - because "this" is inside of the window obj

//example 2 - (why can't i use arrow function)???
//"this" is the obj (obj4)
const obj4 = {
    a: function () {
        console.log(this) //logging the obj4 as a whole
    }
}
console.log(obj4.a());





// ********instantiation******** - when you make a copy of an obj and reuse the code
//class is something you wanna make a copy of
class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

//wizard "extends Player" is adding on top of whatever properties and methods Player has
class Wizard extends Player {
    constructor(name, type) {
        super(name, type) //running the "Player" constructor class so you have access to its properties and methods
        console.log("wizard", this);
    }
    play() {
        console.log(`This is so dope, I am a ${this.type}`);
    }
}

const wizard1 = new Wizard("Zamir", "Mage");
// wizard1.play();
// wizard1.introduce();

// const wizard2 = new Wizard("Shawn", "Dark-Elf");
// wizard2.play();
// wizard2.introduce();
