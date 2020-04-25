let obj = {
    array: ["Zamir", "kanji"],
    fName: "Zamir",
    lName: "Kanji",
    anotherObj: {
        arrayInside: ["array", "inception", insane = "what!", objInside = {
            weDeep: true,
            weShallow: false,
            arrayIns2: ["this", "is", "ridiculous!"]
        }]
    },
    exFunc: (param1) => console.log(param1 + "!"), // method with new arrow syntax
    outputShallow: () => {
        return obj.anotherObj.arrayInside[3].weShallow;
    }
}

console.log(obj.exFunc("yo")); // yo!
console.log(obj.anotherObj.arrayInside[1]); // inception
console.log(obj.anotherObj.arrayInside[2]); // what!
console.log(obj.anotherObj.arrayInside[3].weDeep); //true
console.log(obj.anotherObj.arrayInside[3].arrayIns2[2]); //ridiculous!
console.log(obj.outputShallow()); //false


//index each object in array
let array = [
    { what: "is this" },
    { name: "Zammy" },
    {
        [60 + 9]: "hehe",
        fncEx: (a, b) => a + b
    }
]

console.log(array[0].what); //is this
console.log(array[1].name); //Zammy
console.log(array[2]); //3rd object as a whole
console.log(array[2].fncEx(60, 9)); //69