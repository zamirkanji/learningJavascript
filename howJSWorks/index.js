//memory heap - allocating memory - only have a certain amount
const a = 1; //allocated memory 
const b = 2;
const c = 100;
//memory leak - unused memory layinng around filling up the memory heap

//call stack - reads and executes our scripts
console.log("1");
console.log("2");
console.log("3");

const one = () => {
    const two = () => {
        console.log("4");
    }
    two();
}

//console.log("4");
//two()
one();
//CALL STACK
//reads each script and adds it to the top of the stack, then starts executing from the top. Once each part has been executed, it is popped off the top


//Recursion - function that calls itself 
// function foo() {
//     foo();
// }
// foo();


