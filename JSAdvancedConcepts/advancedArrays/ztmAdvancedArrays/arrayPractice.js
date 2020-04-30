let str = "How can mirrors be real if our eyes aren't real";


const toJadenCase = () => {
    let stringArray = str.split(" "); //split into array
    console.log(stringArray);
    let upperArray = stringArray.map(el => { //returns array
        // word.forEach()
        // return word[0].toUpperCase();
        for (let i = 0; i <= el.length; i++) {
           return el[i].toUpperCase()
        }

        return el;

    })
    return upperArray.join()
  };
console.log(toJadenCase());








const fullArray = [];

const toJadenCase2 = () => {
    let stringArray = str.split(" "); //split into array
    console.log(stringArray);
    let upperArray = stringArray.forEach(el => { //returns array
        // word.forEach()
         let upperWord = el[0].toUpperCase();
         fullArray.push(upperWord);
  });

  return fullArray.join();
}
console.log(toJadenCase2());




const toJadenCase3 = () => {
    let stringArray = str.split(" "); //split into array
    console.log(stringArray);

    for (const wordElement of stringArray) {
        console.log(wordElement);
        // wordElement.forEach(letter => {
        //     stringArray.push(letter[0].toUpperCase())
        // })
    }
}
console.log(toJadenCase3());





//STEPS 
//split into array
//for every word in array
//take the index of [0] and make that upper case
//return "every word