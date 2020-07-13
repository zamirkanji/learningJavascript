const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc, array) => {
        // console.log("array", array);
        // console.log("accumulator", acc);
        debugger;
        return acc.concat(array)
    }, []);

// console.log(flattened);