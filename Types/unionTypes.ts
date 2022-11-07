// union types allow us to give a value a few different possible types.
let age: number | string = 21;
age = 23;
age = '25';

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 3424.3424, long: 34.34432 };

// Union types with functions

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(324);
printAge('344');

function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return (price * tax).toFixed(2);
}

// union types and arrays