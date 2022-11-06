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
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}
// express properties

printName({ first: 'Mick', last: 'Jagger' });
const singer = { first: 'Mick', last: 'Jagger', age: 34 };
printName(singer);

printName({ last: 'Shevelev', first: 'Mikhail' });
