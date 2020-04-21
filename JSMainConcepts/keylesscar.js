
function checkDriverAge() {
  let age = prompt("Please enter your age");
  let ageNum = Number(age);
  if (ageNum < 18) {
    alert("Powering off")
  } else if (ageNum === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Powering on. Enjoy the ride!");
  }
}




// function checkDriverAge(age) {
//   if (age > 18) {
//     return "Powering on. Enjoy the ride!";
//   } else {
//     return "Sorry. You are too young to drive this car!";
//   }
// }
