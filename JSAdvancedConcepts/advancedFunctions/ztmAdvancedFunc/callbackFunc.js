function greeting(name, callback) {
    console.log("Hello", name);
    callback();
}

greeting("Zamir", function () {
    console.log("I am a callback function");
})

const alsoCallback = () => {
    console.log("Also a callback function!");
}

greeting("Zam", alsoCallback);



//example 2 
function getIncome(callback2) {
    callback2(999)
}

getIncome(function (income) {
    console.log(income);
})

//anon function being passed into the calling of getIncome as an argument for callback2 - "income" argument being 999