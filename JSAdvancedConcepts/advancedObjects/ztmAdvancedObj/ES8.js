//.padStart()
//.padEnd() - adds spaces to the end (amount of space, what to add)

console.log("Turtle".padStart(10)); //    Turtle
console.log("Turtle".padEnd(10)); //Turtle   

//comma at end is now valid
const fun = (
    a,
    b,
    c,
    d,
) => {
    console.log(a);
}

fun(1, 2, 3, 4,);

//Iterate over objects

//Object.values
//Object.entries
//Object.keys

let objectPractice = {
    username0: "Santa",
    username1: "Rudolph",
    username2: "Mr. Grinch"
}

//Object keys
Object.keys(objectPractice).forEach((key, index) => {
    console.log(key, objectPractice[key]);
});

//Object.values
Object.values(objectPractice).forEach(value => {
    console.log(value);
})

//Object.entries - both properties and values (key/value pairs) - turns each key value pair into own array
Object.entries(objectPractice).forEach(value => {
    console.log(value);
})

//uses each array and maps over them 
const newUN = Object.entries(objectPractice).map(v => {
    return v[1] + v[0].replace("username", "");
})

console.log(newUN); //["Santa0", "Rudolph1", "Mr. Grinch2"]


//Exercises for ES8

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '~');
console.log(turtle);

// #3) Get the below object to go from:
let objRudolf = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}
// to this:
//'my name is Rudolf the reindeer'
let newArray = [];

const rudolf = Object.entries(objRudolf).map(entry => {
    // console.log(entry);
    entry = entry.join(" ");
    newArray.push(entry);
})

// newArray = newArray.toString();
newArray = newArray.join(" ");
console.log(newArray); //my name is Rudolf the reindeer

//OR 

const rudolfOneLine = Object.entries(objRudolf).map(value => value.join(" ")).join(' ');
console.log(rudolfOneLine);