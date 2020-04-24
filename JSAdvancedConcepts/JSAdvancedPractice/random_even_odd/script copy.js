const container = document.querySelector(".body-container");
const chooseRand = document.querySelector(".rand-number");
const submit = document.querySelector("#submit-values");
const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
const reset = document.querySelector(".clear-field");
let even = document.querySelector(".even");
let odd = document.querySelector(".odd");
let newP = document.createElement("p");


// function getNumbers() {
//   let min = minInput;
//   let max = maxInput;
//   randNum = Math.floor(Math.random() * (max - min) ) + min;
// }
// submit.addEventListener("click", function() {
//   getNumbers(min, max);
//   objectPractice[0].loopObject(); 
// })


//choose random number between 0-99
chooseRand.addEventListener("click", function () {
  randNum = Math.floor(Math.random() * 100);
  objectPractice[0].loopObject();
});


let objectPractice = [{
  firstName: "Zamir",
  lastName: "Kanji",
  // method - function associated with an object
  loopObject: function () {

    if (randNum % 2 === 0) {
      callEven();
    } else {
      callOdd();
    }
    if (randNum === 0) {
      console.log("Please enter a positive integer!");
    }


    function callEven() {
      for (i = 0; i <= randNum; i++) {
        if (i % 2 === 0) {
          even.innerHTML += "<br>" + i + " is even!";
        }
      }
    };
    function callOdd() {
      for (i = 0; i <= randNum; i++) {
        if (i % 2 === 1) {
          odd.innerHTML += "<br>" + i + " is odd!";
        }
      }
    };
  },
  favoriteFood: "chinese",
  isMarried: false,
  fruit: ["banana", "apple", "grape"]
}];

reset.addEventListener("click", function () {
  even.innerHTML = "";
  odd.innerHTML = "";
})
