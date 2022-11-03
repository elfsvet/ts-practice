function square(num: number): number {
  return num ** 2;
}

square(3);

function greet(person: string = 'Stranger'): string {
  return `Hi there, ${person}!`;
}

console.log(greet('Stepan'));
console.log(greet());

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething('chick', 34, true);

const addNums = (x: number, y: number): number => {
  return x + y;
};
const addNums1 = (x: number, y: number) => {
  return x + y;
};

addNums(5, 10);

function rando(num: number) { // union type |or one or another
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

rando(2)