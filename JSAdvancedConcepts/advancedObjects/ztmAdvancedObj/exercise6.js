//Evaluate these:
//#1
[2] === [2] //false - each object has it's own "box"
// {} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5 }; //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    sound = function () {
        console.log(`Mooooo, my name is ${this.name}`);
    }
    iAmCow = () => console.log(`My name is ${this.name} and my color is ${this.color}`);
}

class Mamal extends Animal {
    constructor(name, type, color, age) {
        super(name, type, color)
        console.log(this);
        this.age = age;
    }
}

let cow = new Animal("Mia", "Female", "White/Black");

console.log(cow);
cow.iAmCow();
cow.sound();

let dog = new Mamal("Sadie", "Lab/Catahoula", "Brown/Black", 1);
console.log(dog);
dog.iAmCow();


//Object Method Exploration

// Object.create() //uses an existing object

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. I'm not sure If I am a human being`);
    }
}

const me = Object.create(person);
me.name = "Zamir";
me.isHuman = true;

me.printIntroduction();

//Object.assign() //copies all enumerable own properties from one or more source objects to a target object

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const ogObj = { name: "Zamir", age: 26 };
let newObj = { age: 27, weight: 163, hairColor: "Black" };

const returnedTarget = Object.assign(target, source);
const copyObj = { ...ogObj, ...newObj };

console.log(target); // a:1, b:4, c:5
console.log(returnedTarget); // a:1, b:4, c:5

console.log(copyObj);

//Get information about properties (list of all keys and/or values)

//Object.keys() - returns array of all keys (a, b, c)
let obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(Object.keys(obj));

//Object.values() - returns array of all values (1, 2, 3)
console.log(Object.values(obj));

//Object.entries() - returns array of all keys AND values (each pair has own array)
console.log(Object.entries(obj));

// Create a String from an Object
const string = JSON.stringify(obj);
console.log(string);

// toLocaleString() - returns a string representing an Object
obj.d = new Date();

console.log(obj.d);
console.log(obj.d.toLocaleString());