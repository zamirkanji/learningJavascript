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