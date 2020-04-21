// Root scope (window)

let b = "can i access this?";

function bb() {
  let a = "hello"; // variable a only lives inside this function 

  console.log(a);
  console.log(b);
}

let fun = 5;

function funFunction() {
  //child scope
  let fun = "hello!";
  console.log(1, fun);
}
function funerFunction() {
  //child scope
  let fun = "Bye";
  console.log(2, fun);
}
function funestFunction() {
  //child scope
  fun = "wassup!";
  console.log(3, fun);
}

console.log("window", fun); // 5 (window, root scope)
funFunction(); //hello! 
funerFunction(); //Bye
funestFunction(); //wassup!

//function bb lives inside window scope (root scope)
// window object now contains function bb 