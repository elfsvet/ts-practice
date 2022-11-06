/// type alias
type Person = {
  name: string;
  age: number;
};

type Point = {
    x: number;
    y: number;
}

const sayHappyBirthday = (person: Person) => {
  return `Hey ${person.name}, congrats on turning ${person.age}!`;
};

console.log(sayHappyBirthday({ name: 'Stepan', age: 32 }));

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

function doublePoiunt(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: point.x * 2, y: point.y * 2 };
}
