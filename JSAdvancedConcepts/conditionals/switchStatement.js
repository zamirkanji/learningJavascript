function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward": //if
      whatHappens = "You see a monster!";
      break;
    case "back": //else if
      whatHappens = "You arrived home!";
      break;
    case "right": //else if
      whatHappens = "You found a pond!";
      break;
    case "left": // else if 
      whatHappens = "You run into a troll!";
      break;
    default: //else 
      whatHappens = "Please enter a valid direction!";

  }
  return whatHappens;
}

function matchItems(shoppingItem) {
  let itemMatch;
  switch (shoppingItem) {
    case "apple":
      itemMatch = "You found an apple!";
      break; // stops at break and returns variable itemMatch "You found an apple!"
    case "orange":
      itemMatch = "You found an orange!";
      break;
    case "banana":
      itemMatch = "You found an banana!";
      break;
    case "pear":
      itemMatch = "You found an pear!";
      break;
    case "lemon":
      itemMatch = "You found an lemon!";
      break;
    default:
      itemMatch = "You didn't find any items.";
  }
  return itemMatch;
}
//itemMatch only gets assigned if theres a match, otherwise it stays undefined
//when you call function (window.matchItems("apple")) the "apple" is the shoppingItem argument for the shoppingItem function parameter 