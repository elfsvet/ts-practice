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
// const stuff: any[]= [1234,123143,13131,'dsfaf',{}]

const stuff: (number | string)[] = [34, 3434, 'sdfsf', 'sfsf'];
// array with multiple different types in the array
const coords: (Point | Loc)[] = [];
coords.push({ lat: 34.344, long: 34.3434 });
coords.push({ x: 34.344, y: 34.3434 });

// literal types
// literally 0 =0 1=1 not number not any number
let zero: 0 = 0;
let hi: 'HI' = 'HI';
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

// they can be any type number as well
type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';


  let today: DayOfWeek = 'Monday'
  today = 'Wednesday'