//Primitive Type - passed by VALUE - copy the value and create the value somewhere else in memory
let a = 5;
// let b = 10;
let b = a; //passed by value (5)
b++; //6

console.log(a);
console.log(b);

//Pass by reference (objects) - stored in memory and passed by reference
let obj1 = { name: "Zamir", password: "123" };
let obj2 = obj1;

obj2.password = "easyPeasy";
console.log(obj1);
console.log(obj2); //password changes for both

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(9992123);
console.log(c, d); //both same, passed by reference

//clone an array 
let f = [1, 4, 8];
let o = [7, 8].concat(f);
console.log(f, o);

//clone an object
let obj = {
    a: "A",
    b: "B",
    c: {
        deep: "try and copy me"
    }
}

let objClone = Object.assign({}, obj);
let objClone2 = { ...obj }; //*** using spread operator
let superClone = JSON.parse(JSON.stringify(obj)); //turn to string then back to obj
// obj.c = 5;
// console.log(obj);
// console.log(objClone); //won't change - made new clone in different part of memory
// console.log(objClone2);
console.log(superClone); //deep clone of the obj

//shallow clone - only clone the first layer (first obj)
obj.c.deep = "hahahahaha";
console.log(obj, objClone, objClone2);


