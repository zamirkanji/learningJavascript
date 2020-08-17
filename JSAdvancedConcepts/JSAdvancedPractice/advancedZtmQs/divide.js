const tempArr = [];
const finalDivide = [];

export const divideArray = (arr) => {
  const sorted = arr.sort(function (a, b) {
    return a - b;
  });

  //   const mySet = new Set(sorted);
  //   console.log(mySet);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1] && sorted[i] == sorted[i - 1]) {
      tempArr.push(sorted[i]);
    }
    // let i = 0;
    // // while (i < tempArr.length; i++) {
    // while (sorted[i] == tempArr[i]) {
    // 	tempArr.push(sorted[i]);
    // 	i++;
    // }
    // }
  }

  //test feature
  //BIG FEATURE test

  console.log(tempArr, "temp");
  console.log(sorted, "sorted");
  output.textContent = sorted;
  output2.textContent = tempArr;
};

// divideArray([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]);
