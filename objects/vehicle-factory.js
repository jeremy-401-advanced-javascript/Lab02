
'use strict';


const Vehicle = () => ({
  drive: () => 'Moving foward!',
  
  stop: () => {
    return 'Stopping';
  },

});

function CarFactory( name, wheels ) {
  let car = Object.assign(
    {},
    { name },
    { wheels },
    Vehicle()
  );



  return Object.freeze(car);
}


function MotorcycleFactory( name, wheels ) {
  let motorcycle = Object.assign(
    {},
    { name },
    { wheels },
    { wheelie },
    Vehicle()
  );

 
  function wheelie () { 
    
    return 'Wheee!';

  }

  return Object.freeze(motorcycle);
}


module.exports = { CarFactory, MotorcycleFactory};