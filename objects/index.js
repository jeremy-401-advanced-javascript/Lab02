'use strict';

// const VehicleConstructor = require('./vehicle-constructor.js');
const CarClass = require('./vehicle-class.js');
// const Factory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
// const mazda = new VehicleConstructor.Car('Mazda 3');
// console.log(mazda.name, mazda.drive(), mazda.stop());

// const harley = new VehicleConstructor.Motorcycle('Harley');
// console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class

const lexus = new CarClass.Car('ES 350', 4);
console.log(lexus.name, lexus.wheels, lexus.drive(), lexus.stop()); 

const ducati = new CarClass.Motorcycle('ducati', 2);
console.log(ducati.name, ducati.wheels, ducati.drive(), ducati.stop(), ducati.wheelie());

// Implement a car and motorcycle using a Factory

// const bmw = Factory.CarFactory('8 series', 4);
// console.log(bmw.name, bmw.wheels, bmw.drive(), bmw.stop());

// const suzuki = Factory.MotorcycleFactory('Jixer 929', 2);
// console.log(suzuki.name, suzuki.wheels, suzuki.drive(), suzuki.stop(), suzuki.wheelie());
