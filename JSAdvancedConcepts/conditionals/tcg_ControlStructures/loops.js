// for in object
// for of array


//object
let oldCar = {
    make: "Honda",
    model: "Civic",
    year: "1996"
}

for (let key in oldCar) {
    const nameCar = () => console.log(`${key} ---> ${oldCar[key]}`);
    nameCar();
}




//array
let animals = ["Cat", "Dog", "Parrot", "Bunny"];
let names = ["Kai", "Kenai", "Sir", "Tigger"];

let x;


// for (x of animals) {
//     const nameAnimal = names.map(name => {
//         for (let y of names) {
//             return names[y];
//         }
//     })
//     console.log(nameAnimal);
//     const animalName = () => console.log(`${nameAnimal} the ${x}`);
//     animalName();
// }
for (x of animals) {
    for (let y of names) {
        console.log(y);
        const animalName = () => console.log(`${y} the ${x}`);
        animalName();
    }

}