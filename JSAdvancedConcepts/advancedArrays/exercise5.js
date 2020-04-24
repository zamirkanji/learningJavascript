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
    me: ["Zamir", "Kanji"]
  },
];

console.log(arrayEx[4].me[1]); // "Kanji" - CAN index objects INSIDE an array just like you can index arrays in general

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclamation = [];
const arrayExclamation = arrayEx.forEach((usernN) => {
  exclamation.push(usernN.username + "!");
})
// forEach take a function - function with a parameter/arg of "userN"
// "userN" is just a parameter/arg for EACH INDIVIDUAL object inside the array (length 4)
// for each individual object (userN), push "username" + "!" to exclamation array
console.log(arrayExclamation);
console.log("foreach", exclamation);

//Create an array using map that has all the usernames with a "? to each of the usernames
const arrayMap = arrayEx.map((username) => {
  return username + "?";
})
console.log("map", arrayMap);

//Filter the array to only include users who are on team: red


//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayEx = arrayNum.map((num, i) => {
  console.log(num, i);
  console.log(num);
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
