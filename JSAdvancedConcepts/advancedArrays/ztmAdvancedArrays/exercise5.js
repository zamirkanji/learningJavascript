// Complete the below questions using this array:
const arrayEx = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
  //adding something 
  {
    username: "runninthruda6ix",
    me: ["Zamir", "Kanji"],
    score: 69
  },
];

console.log(arrayEx[4].me[1]); // "Kanji" - CAN index objects INSIDE an array just like you can index arrays in general

// - Create an array using forEach that has all the usernames with a "!" to each of the usernames
// forEach take a function - function with a parameter/arg of "userN"
// "userN" is just a parameter/arg for EACH INDIVIDUAL object inside the array (length 4)
// for each individual object (userN), push "username" + "!" to exclamation array
const exclamation = [];
const arrayExclamation = arrayEx.forEach((usernN) => {
  exclamation.push(usernN.username + "!");
})
console.log(arrayExclamation);
console.log("foreach", exclamation);


// - Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = arrayEx.map(user => {
  return user.username + "?";
})
console.log("map", arrayMap);

// - Filter the array to only include users who are on team: red
// I used object keyword to filter through each object in the array
const arrayExFilter = arrayEx.filter(Object => {
  return Object.team === "red";
})
console.log("filter", arrayExFilter);


// - Find out the total score of all users using reduce
const arrayExReduce = arrayEx.reduce((acc, num) => {
  // return typeof num.score == "number" ? acc + num.score : acc + num.score;
  return acc + num.score;
}, 0); //zero is what the accumulator starts at 
console.log("reduce", arrayExReduce);

//reduce with map
const reduceArrayEx = arrayEx
  .map(obj => obj.score)
  .reduce((acc, num) => acc + num, 0);
console.log("map and reduce", reduceArrayEx);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayEx = arrayNum.map((num, i) => {
  console.log(num, i); // i prints out 0-5 (6 elements in array) since "map" loops through function
  // console.log(num);
  return num * 2;
})
const newArrayExPure = arrayNum.map((num, i) => {
  return num * 2;
})
console.log(newArrayExPure);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
