//JS Run-Time Environment

//Set Timeout - WEB API (Not part of JS)
const time = new Date().toLocaleString();
console.log("Hi", "1", time);
setTimeout(() => {
    const time2 = new Date().toLocaleString();
    console.log("Zamir", "2", time2);
}, 5000) //3000 milliseconds (3 seconds)
console.log("What's up", "3", time);



//CALL STACK


//WEB API - DOM, AJAX (XMLHttpRequests, SetTimeout) - Not part of JS so it is popped out of the callstack and waits for the timer in the callback queue


//CALLBACK QUEUE - (onClick, onLoad) - once aynchronous code is ready to run it is put in the callback queue - waiting there for when everything else has run 


//EVENT LOOP - Checks CALL STACK for something to run, if it's empty, checks callback and moves it into the call stack

// event.addEventListener("click", () => {
//     console.log("click");
// })


//EXAMPLE 
console.log('Message no. 1: Sync');
setTimeout(function () {
    console.log('Message no. 2: setTimeout');
}, 0);
var promise = new Promise(function (resolve, reject) {
    resolve();
});
promise.then(function (resolve) {
    console.log('Message no. 3: 1st Promise');
})
    .then(function (resolve) {
        console.log('Message no. 4: 2nd Promise');
    });
console.log('Message no. 5: Sync');