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
  type Point = {
    x: number;
    y: number;
  };
  
  const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
  };
  
  console.log(sayHappyBirthday({ name: 'Stepan', age: 32 }));
  
  let coordinate: Point = { x: 34, y: 2 };
  
  function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
  }
  
  function doublePoiunt(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
  }
  
  