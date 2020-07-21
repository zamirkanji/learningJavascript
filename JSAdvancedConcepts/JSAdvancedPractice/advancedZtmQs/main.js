// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
// Make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591] 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const divideArray = (array) => {
    // console.log(array);
    // return array.filter(num => num > 2);
    // console.log(overTwo);
    // array.map(num => num * 2);

    //map through array 
    //if math.min unshift to new array (put in front)

    const newArray = [];

    // array.map(num => {

    //     if (num === num) {
    //         newArray.push(num);
    //     }
    //     // const min = Math.min(num);
    //     // console.log(min);
    //     // if (min) {
    //     //     newArray.unshift(min);
    //     // }
    //     // if (num === num) {
    //     //     const matchingNums = [];
    //     //     matchingNums.push(num);
    //     //     newArray.unshift(matchingNums);
    //     // }
    // })

    const sorted = array.sort((a, b) => a - b);

    for (let num of sorted) {
        if (num == num) {
            // newArray.push([num]);
            // console.log(newArray);

        }
    }

    // for (let i = 0; i < array.length; i++) {
    //     // console.log(array[i]);
    //     // array.forEach(el => {
    //     //     if (el < array[i]) {
    //     //         newArray.push(el);
    //     //     }
    //     // })
    //     console.log(array[0], array[i], i);

    //     if (array[0] < array[i]) {
    //         // array.pop(array[i]);
    //         newArray.push(array[0]);
    //     }
    // }

    // console.log(array, newArray, "This is the new Array");
    return sorted;

}

console.log(divideArray([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]));