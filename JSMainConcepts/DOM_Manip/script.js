// PRACTICE
// RED PARAGRAPH
// calls upon div node with the class container
const container = document.querySelector("#container");
// create element (paragraph) in memory/DOM
const para = document.createElement("p");
// using para add text content to the element
para.textContent = "Hey I'm red!";
// add the inline css style color red
para.style.color = "red";
container.appendChild(para);

// BLUE HEADER 3
const headerT = document.createElement("h3");
headerT.textContent = "I'm a blue h3!";
headerT.style.color = "blue";
container.appendChild(headerT);

// DIV (BLACK BORDER/PINK BG COLOR) WITH H1 ("IM IN A DIV") AND PARA THAT SAYS ME TOO!
const div = document.createElement("div");
div.setAttribute("id", "theDiv"); // creates id attribute set to "theDiv"
div.style.cssText = "background: pink; border: 1px solid black"; // styles the div with css attributes
const headerO = document.createElement("h1");
const paraTwo = document.createElement("p");
div.appendChild(headerO);
div.appendChild(paraTwo); // appends to div before container
headerO.textContent = "I'm in a div!";
paraTwo.textContent = "ME TOO!";
container.appendChild(div); // appends entire div with paraTwo and headerO to container

// ONCLICK, ADDEVENTLISTENER METHODS

// Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");
// Method 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World!");
});

// All methods can be used WITH named functions
function alertFunction() {
  alert("Yay you did it!");
}
// Method 2 (calling function)
const btnFunc2 = document.querySelector("#btnfunc2");
btnFunc2.onclick = alertFunction;
// Method 3 (callinf function)
const btnFunc3 = document.querySelector("#btnfunc3");
btnFunc3.addEventListener("click", alertFunction);

// PASSING A PARAMETER
const param = document.querySelector("#btnParam");
param.addEventListener("click", function(e) {
  console.log(e.target);
  console.log(e);
  // e.target.style.background = "blue";
});

// GROUPS OF NODES (QUERYSELECTORALL) - node list
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a "dblclick" listener
  button.addEventListener("dblclick", e => {
    alert("This button is: #" + button.id);
  });
});
