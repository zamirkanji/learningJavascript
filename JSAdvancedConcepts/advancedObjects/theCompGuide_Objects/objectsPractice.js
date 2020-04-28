const movieList = document.getElementById("movie-list");
const button = document.querySelector("button");
const searchBtn = document.getElementById("search-btn");
// style = {
//     "background-color": 
// }

button.style["background-color"] = "#ff0062";
searchBtn.style["backgroundColor"] = "#ff0062";
movieList.style.block = "block";


const userChosenKeyName = "runninthruda6ix"; // entered by input from user
let lastName = "kanji";

const person = {
    [userChosenKeyName]: { //searches for userChosenKeyName
        password: "1234"
    },
    name: "Max",
    age: 30, //deleted
    hobbies: ["Sports", "Cooking", {
        woah: "this is dope!"
    }],
    greet: function () {
        console.log(`Hi there ${this.name}!`)
    },
    "Key Example": {
        numberOfGames: {
            [1 + 2]: 3,
            gameCount: 26,
            preferedGame: "VALORANT",
            game: function () {
                console.log(this.preferedGame)
            }
        }
    },
    "first name": "Zamir", //***
    "kanji": lastName,
    "ageThree": function () {
        console.log(this.age + 1);
    },
    1.5: "Number Property... Can do Strings, numbers, and Symbols"
}

console.log(person.age); // 30
person.greet() // Hi there max!
console.log(person.hobbies[2].woah); // this is dope!

person.isMarried = false; // add property 
delete person.age; // delete keyword works on objects
console.log(person.age) // undefined
console.log(person); // no age property 



person.age = 68; // new "age" property 
person.hairColor = "Brown";
console.log(person["first name"]); // Zamir 
console.log(person["Key Example"].numberOfGames.game()); // VALORANT
console.log(person["ageThree"]()); // 69
console.log(person[1.5]);

console.log(person);


const keyName = "first name"; //*** "first name" is dynamic property value in person obj
const leggo = "leggo";
person.leggoAye = leggo;


console.log(person[keyName]); // looks for property "first name" in person // outputs Zamir
console.log(person.leggoAye); // leggo
console.log(person);
console.log(person[userChosenKeyName].password); // 1234
console.log(person["runninthruda6ix"]); // 1234


const propkey = "field 12";
const person2 = {
    [propkey]: "Zamir" // "field 12" = "Zamir"
}
console.log(person2["field 12"]);