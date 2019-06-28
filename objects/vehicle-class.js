'use strict';


// Car Class 
class Vehicle {

  // When creating a new car, store it's name and wheels
  constructor( name, wheels ) {
    this.name = name;
    this.wheels = wheels;
  } 

  drive() {
    return 'Moving forward';
  }

  stop() {
    return 'Stopping';
  }

}

class Car extends Vehicle {
  constructor( name ) {
    super( name, 4 );
  }
}

class Motorcycle extends Vehicle {

  constructor( name ) {
    super( name, 2 );
  }

  wheelie() {
    return 'Wheee!';
  }
}


module.exports = { Car, Motorcycle };