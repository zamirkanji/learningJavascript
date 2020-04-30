//Spread operator 

const personSpread = {
    name: "Sam",
    hobbies: ["cooking", "hiking", "climbing"],
    age: 26
}

const anotherPerson = personSpread;

personSpread.age = 30;

console.log(anotherPerson); //age will be added (same as personSpread)


// spread adds all key value pairs of "personSpread" but makes a "Copy"  of the new object (spread2) so its in its own "box"
const personSpread2 = {
    ...personSpread
};
personSpread.age = 31;

console.log(personSpread); // age = 31
console.log(personSpread2); // age = 30


//if you have other reference value (arrays) it will not be "copied/cloned" so its still the same ref value in memory (From the original object) - nested reference values are not copied
personSpread.hobbies.push("coding");
console.log(personSpread2); //will have "coding"


//copy nested values

const person3 = { ...personSpread, age: 28, hobbies: [...personSpread.hobbies] };
console.log(personSpread);
console.log(person3); //age 28

personSpread.hobbies.pop(); //takes off "coding"
console.log(personSpread);
console.log(person3); //will still have "coding"