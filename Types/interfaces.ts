// Interfaces

// Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax).

// We can use them to create reusable, modular types that describe the shapes of objects

// an interface
interface Person {
  name: string;
  age: number;
}

// use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
  const { name, age } = person;
  return `Hey ${name}, congrats on turning ${age}!`;
};

sayHappyBirthday({ name: 'Stepan', age: 32 });

// type Point = {
//   x: number;
//   y: number;
// };

// we can use commas or semicommas , or ;
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 12, y: 344 };

// optional properties

interface Person2 {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: () => string;
  sayHi(): string;
}

const thomas: Person2 = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 2043434,
  sayHi: () => {
    return 'Hello';
  },
};

thomas.first = 'Ttom';
// thomas.id = 3434 could not be changed

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

// adding new properties
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: 'Elton',
  age: 0.6,
  breed: 'Shepherd',
  bark() {
    return 'Woof woof';
  },
};

// inherit from another interface

interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 4.5,
  breed: 'Lab',
  bark() {
    return 'Bark';
  },
  job: 'guide dog',
};

// multiple extends interfaces

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 12345,
  email: 'p@gmail.com',
  level: 'senior',
  languages: ['Js', 'Python'],
};

// compare to the types interfaces
// interface can only describe the shape of the objects
// if not the shape of an object we should use type alias
type Color = 'red' | 'blue';

// !types can't do this
// type Chicken = {
//   breed: string;
// };

// type Chicken = {
//   numEggs: number;
// };

// !interface can do this
interface Chicken {
  breed: string;
}

interface Chicken {
  numEggs: number;
}

// extending Properties
// types will use &
type Name = { name: string };

type People = Name & {
  age: number;
};

// interface can use interface extends
interface SuperEngineer extends Engineer {
  salary: number;
}

// and you see how this describes object shape
const sEngineer: SuperEngineer = {
  name: 'Mario',
  id: 23243,
  email: 'mario@g.com',
  level: 'top',
  languages: ['Italian'],
  salary: 1000000,
};
