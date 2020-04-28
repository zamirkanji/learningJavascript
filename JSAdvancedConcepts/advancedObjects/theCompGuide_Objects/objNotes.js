//Describe real world entities 

//Movie on website
const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
};

//Made up of properties and methods (variables and functions) - data in properties and actions in methods
//Allow you to "group" related data together and split code into logical pieces


//Primitive Values - num, string, booleans, null, undefined, Symbol
//Reference Values - objects - create on your own data structure {...}, arrays, DOM Nodes

const complexPerson = {
    name: "Zamir",
    hobbies: ["Sports", "Gaming"],
    address: {
        street: "Some random Sreet SE",
        stateId: 5,
        country: "United States",
        phone: {
            number: 233 - 233 - 2333,
            isMobile: true
        }
    },
}

//Name is primitive value
//hobbies holds an array (reference), of primitive values (Strings)
// etc
//Primitive values are the core building blocks that hold your data, objects and arrays are helpful for organizing and working with that data 