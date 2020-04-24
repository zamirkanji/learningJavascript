//map, filter, reduce - Anytime you want to do a loop, you want to use one or all of these methods 


const array = [1, 2, 10, 16];
const stringArray = ["hello", "my", "name", "is", "zamir"];


//FOR EACH
//mulitply each number in array * 2
//forEach (num) in array mulitply (num * 2) - push() results to double
//forEach doesn't expect a "return" - can become too many "side effects"
const double = []; //new array to push() results in
const newArray = array.forEach(num => {
  double.push(num * 2);
});
console.log("forEach", double);


//MAP - same as forEach but always need to "return"
//Map loop over each array, applying the operation on each element, and returns each result - gets added to the array - cant do that with forEach()
const mapArray = array.map((num) => {
  return num * 2;
});
const mapArrayNew = array.map(num => num * 2); // same as above since arrow functions implies "return" - also New form for the parameters do not need parenthesis 
console.log("map", mapArrayNew);


//FILTER - filters out condition 
//example 1
const filterArray = mapArrayNew.filter(num => num > 5); //only ouputs this condition
console.log("filter", filterArray);
//example 2
const stringFilter = stringArray.filter(String => String.length > 3);
console.log(stringFilter);


//REDUCE (can do FILTER and MAP)
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
  // every time the function iterates, acc + num 
  // 0(acc) + 1(num) = 1
  // 1(acc) + 2(num) = 3
  // 3(acc) + 10(num) = 13
  // 13(acc) + 16(num) = 29
}, 0);
console.log("reduce", reduceArray);

//arrow function written as a function expression 
const reduceArray2 = double.reduce(function (acc, num) {
  return acc + num;
})
console.log(reduceArray2);

//Arrow Function in completely new ECMAScript
const reduceArray3 = mapArrayNew.reduce((acc, num) => acc + num, 0);
console.log(reduceArray3);
// acc, num are normal function parameters
// => function 
// acc + num is the "return" value
// "0" is where the "Accumulator" starts
