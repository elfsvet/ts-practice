const dog = {
  name: 'elton',
  breed: 'as',
  age: 0.5,
};

const printName = (name: { first: string; last: string }): string => {
  return `Name: ${name.first} ${name.last}`;
};

console.log(printName({ first: 'Stepan', last: 'Matysik' }));

// {x: number, y : number} pattern
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// express properties

printName({ first: 'Mick', last: 'Jagger' });
const singer = { first: 'Mick', last: 'Jagger', age: 34 };
printName(singer);

printName({ last: 'Shevelev', first: 'Mikhail' });

/// type alias
type Person = {
  name: string;
  age: number;
};
// reference short object type
// type Point = {
//   x: number;
//   y: number;
// };

const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${person.age}!`;
};

console.log(sayHappyBirthday({ name: 'Stepan', age: 32 }));

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// nested objects
// a function with a nested object type parameter
const describePerson = (person: {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  };
}) => {
  return `Person: ${person.name},
  Age: ${person.age},
  parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};

console.log(
  describePerson({
    name: 'Stepan',
    age: 32,
    parentNames: { mom: 'tanya', dad: 'Uriy' },
  })
);

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brouthers',
  numStreams: 1234567,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
};

console.log(calculatePayout(mySong));
printSong(mySong);

type Point = {
  x: number;
  y: number;
  // optional properties
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

// readonly modifier dont change
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12345,
  username: 'catgurl',
};

console.log(user.id);

// intersection types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow',
};

type Cat = {
  numLives: number;
};
type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 9,
  breed: 'Husky',
  age: 8,
};
