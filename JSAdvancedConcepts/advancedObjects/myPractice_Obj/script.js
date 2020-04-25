// const Person = (first, last, age, eye) => {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this, eyeColor = eye;
// }

//Arrow function does not work for constructors 

//Object constructors are used for creating many objects of the same "type" (in this case, a person)
//this function is an object constructor (used as a blueprint to help create the object, like a template), but does not create the object itself
function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this, eyeColor = eye;
}

//creating each object using "new"
let myFather = new person("Arif", "Kanji", 60, "Brown");
let mySister = new person("Ziyana", "Kanji", 21, "Brown");

//adding a new property
myFather.nationality = "Indian";


console.log(myFather, mySister);