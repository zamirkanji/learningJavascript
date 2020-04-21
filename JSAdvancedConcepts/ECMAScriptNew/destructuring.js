//old way to assign variables to obj properties
let oldECMA = {
  old: "blah",
  older: "blah blah"
};
let oldWay = oldECMA.old;
let olderWay = oldECMA.older;
console.log(oldWay);
console.log(olderWay);



//ECMA 6
let newObject = {
  firstName: "Zamir",
  lastName: "Kanji",
  age: 26
};

let { firstName, lastName, age } = newObject;
console.log(`${firstName} ${lastName}`);

//reason it gives a "SyntaxError: Identifier 'age' has already been declared" is because you cannot declare a const inside the same scope... something has to be wrapped inside a function??? 

const newFunction = () => {
  let newObject2 = {
    // [name]: "Zamir",
    name: "Zammy",
    [69]: "Nice",
    location: "Seattle"
  };
  let { name, location } = newObject2;
  console.log(name);
  console.log(location);
};
console.log(newFunction());
// let { name, location } = newObject2;
// let { [name]: n, location: l } = newFunction();
// console.log(n);
// console.log(l);


//assinging variables, and missing properties
const newFunction2 = () => {
  let name2 = "Name:";
  let hello = "wassup zam";
  let newObject3 = {
    [name2]: "Zamir",
    ["Zamir" + "Kanji"]: `${hello}`,
    [70 - 1]: "Nice",
    location2: "Seattle"
  };
  let { [name2]: n, location2: l, missing = "property" } = newObject3; //if object goes into function, so does the destructuring... thats why the example above doesn't work with destructuring outside of scope 
  //can set missing properties inside with "="// ":" assigns what goes where
  console.log(newObject3);
  console.log(n);
  console.log(l);
  console.log(missing);

};
console.log(newFunction2());


