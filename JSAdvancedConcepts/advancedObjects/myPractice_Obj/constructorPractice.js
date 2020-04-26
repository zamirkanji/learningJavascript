class Car {
    constructor(maxSpeed, driverName, carColor, carType) {
    this.maxSpeed = maxSpeed; //properties of Car
    this.driverName = driverName;
    this.carColor = carColor;
    this.carType = carType;
        this.year = function(yearBought) { //method of Car
            console.log(`My name is ${this.driverName}. My car is ${this.carType} and I bought it in ${yearBought}`);
        }

    }
        greetDrive = function() {
            console.log(`Hi, my name is ${this.driverName}!`);
        }
}

//creating new objects
let myCar = new Car(150, "Zam", "Charcoal Grey", "AGM S-Class");
let myCar2 = new Car(100, "Zam", "Space Black", "Range Rover");
let myCar3 = new Car(50, "Zam", "White", "Honda Civic");
let myCar4 = new Car(200, "Zam", "Red", "Lamborghini");
//
console.log(myCar.maxSpeed); //150
console.log(myCar3.year(2020)); // my name is zam. my car is honda civic and i bought it in 2020
console.log(myCar4.greetDrive()); //Hi, my name is Zam!


//extends Car to SuperCar
class SuperCar extends Car {
    constructor(maxSpeed, driverName, carColor, carType, price) {
        super (maxSpeed, driverName, carColor, carType, price)
        this.price = price;
        this.priceShowOff = function() {
            console.log(`My car is a ${this.carType} and its priced at ${this.price}`)
        }
        console.log(this);    
    }
    tax = (tax) => this.price + (this.price * tax); 
}

//follows same format as each constructor function its referrring to (Car and SuperCar)
let superCar1 = new SuperCar(250, "Roger", "black", "Bugatti", 2000000)
let superCar2 = new Car(130, "Zamir", "Blue", "Jeep"); 
let superCar3 = new SuperCar(270, "Barry", "Midnight Green", "McLaren", 500000);


console.log(superCar1.priceShowOff());
console.log(superCar2.year(2020));
console.log(superCar3.tax(.125)); //tax 12.5%