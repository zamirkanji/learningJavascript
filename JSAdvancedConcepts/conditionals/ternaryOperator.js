// condition ? expr1 : expr2;

function isUserValid(boolean) {
  return boolean;
}
//boolean is parameter here

let answer = isUserValid(true) ? "You may enter" : "Access Denied."; //if isUserValid is "false" then when "answer" variable is called - "Access denied" "otherwise :" "You may enter"
//isUserValid(argument)
// when you call function youre giving the parameter an argument and then returning it

let automatedAnswer = "Your account number # is " + (isUserValid(false)) ? "1234" : "not available.";
// if user is valid then show account number, otherwise say its not available.

// same thing as the ternary operator above
function condition() {
  if (isUserValid(true)) {
    return "You may enter";
  } else {
    return "Access denied.";
  }
}

let answer2 = condition();

// my example 

const coinFlip = () => {
let chooseCoin = prompt("Choose Heads or Tails?");
let coin = 
  (chooseCoin == "heads") ? "You win 10 million dollars!" : 
  (chooseCoin == "tails") ? "You win nothing, tails sucks":
    "That's not a side of the coin!";
    
  console.log(coin);
}
console.log(coinFlip());