// const para = document.getElementById("para");

// let text = "";
const container = document.querySelector(".body-container");
const header = document.getElementById("#header-one");
// let even = document.querySelector("#even");
// let odd = document.querySelector("#odd");
let newP = document.createElement("p");
container.appendChild(newP);



let objectPractice = [{
  firstName: "Zamir",
  lastName: "Kanji",
  // method - function associated with an object
  loopObject: function () {
    let numQ = prompt("Please enter a number, even or odd");
    randNum = Number(numQ);

    if (randNum % 2 === 0) {
      callEven();
    } else {
      callOdd();
    }

    function callEven() {
      for (i = 0; i <= randNum; i++) {
        if (i % 2 === 0) {
          console.log(i + " is even!");
          // even.textContent = i + " is even!";
        } else {

        }
      }
    };

    function callOdd() {
      for (i = 0; i <= randNum; i++) {
        if (i % 2 === 1) {
          console.log(i + " is odd!");
          // odd.textContent = i + " is odd!";
        } else {

        }
      }
    };
  },
  favoriteFood: "chinese",
  isMarried: false,
  fruit: ["banana", "apple", "grape"]
}];

window.addEventListener("load", objectPractice[0].loopObject());


newP.textContent = "This is a test!";
container.appendChild(newP);
// container.appendChild(newP);