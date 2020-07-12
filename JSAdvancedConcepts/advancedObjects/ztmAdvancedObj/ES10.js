//flat() - joins nested arrays
const arrayFlat = [1, 2, 3, 4, 5];
const arrayFlat2 = [1, [2, 3], [4, 5]];
const arrayFlat3 = [1, [[2, 3], [4, [5, [6]]]]];


console.log(arrayFlat.flat());
console.log(arrayFlat2.flat(1));

console.log(arrayFlat3.flat(3));
console.log(arrayFlat3.flat(4));

const entries = ["bob", "sally", , , , , , "cindy"];
console.log(entries.flat());

//flatMap()
const squared = arrayFlat2.flatMap(num => num ** 2);
console.log(squared);

//Trim start and End
let userEmail = '        eddytheeagle@gmail.com';
let userEmail2 = 'zamir@comcast.net       ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//Form Entries - transforms a list of key value pairs into an object
userProfiles = [["CommanderTom", 23], ["DerekZlander", 40], ["Hansel", 18]];

const objectEntries = Object.fromEntries(userProfiles);
console.log(objectEntries); //turns each array into object

console.log(Object.entries(objectEntries)); // Object.entries turns object back into arrays

//Try, Catch, Block - try a piece of code and if there are any errors, catch them
try {
    true + "Hi" //type coercion
} catch {
    console.log("you messed up!");
}
//error
try {
    bob + "Hi" //type coercion
} catch {
    console.log("you messed up!");
}


//Exercises 

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]]

const newArrayFlat = array.flat(2);
console.log(newArrayFlat); //[1,2,3,[4],[5]]


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

console.log(greeting.flatMap(num => num.join(" "))); //for each array element, join them together

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(greeting.flat().join(" "));
console.log(greeting.flatMap(x => x.join(" ")).join(" "));

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimStart().trimEnd());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

const newUsersArr = Object.entries(users); //obj to array
console.log(newUsersArr);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const userObj = newUsersArr.map(el => {
    return [el[0], el[1] * 2];
});
console.log(userObj);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

console.log(Object.fromEntries(userObj));