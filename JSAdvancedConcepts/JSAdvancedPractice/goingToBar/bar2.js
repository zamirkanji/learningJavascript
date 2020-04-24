const body = document.querySelector(".body-container-main");
const div = document.querySelector(".body-container");
const h1 = document.querySelector("h1");
const fname = document.getElementById("fname-label");
const input = document.querySelector("input");


let inputValue = input.value;

let p = document.createElement("p");
let label = document.createElement("label");

const createPElement = () => {
    p.className = "para";

}




function person(first, last, age, city) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.city = city;
}
let me = new person("Zamir", "Kanji", 16, "Seattle")

const checkAge = () => {
    (me.age > 21 && me.age <= 45) ? console.log("you can drink") :
        me.age < 21 ? console.log(`I'm sorry, you can't drink ${me.firstName}, you're too young!`) :
            me.age === 21 ? console.log("AYE, prime of your life, buddy") :
                me.age > 45 ? console.log("You're way too old to be here!") :
                    console.log("thats not even a number!");
}

const goesToBar = (boolean) =>
    (boolean === true) ? checkAge() :
        (boolean == false) ? console.log("you're going home, buddy...") :
            console.log("you either went, or you didn't");

const askAboutBar = () => {
    // createPElement();
    let answer = label.textContent(`Are you going to the bar ${me.firstName}?`);
    answer === "yes" ? goesToBar(true) :
        answer === "no" ? goesToBar(false) :
            console.log("We don't take 'I don't know\'s' around here");

}

// let askName = prompt("What is your name?");
// const checkName = (askName === "Zamir") ?
//     askAboutBar() :
//     console.log("I'm sorry, you are the wrong person!"); // new object





const checkName = (e) =>
    (fname.inputValue === me.firstName) ? askAboutBar() :
        console.log("I'm sorry, you are the wrong person!"); // new object


const createLabel = (e) => {
    if (inputValue.length > 0 && e.keyCode === 13) {
        askAboutBar()
        console.log(e);
    }
}
window.addEventListener("load", function setHeader() {
    h1.textContent = `Hello, ${me.firstName}!`

});

div.appendChild(label);

input.addEventListener("keypress", createLabel);