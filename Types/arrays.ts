// Arrays
// empty array type
// const activeUsers: [] = [];
const activeUsers: string[] = [];

activeUsers.push('Tony');
activeUsers.push('Alex');

const ageList: number[] = [35, 434, 34];
ageList[0] = 99;

const bools: Array<boolean> = [];
// const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 4 });

// multidimensional arrays
const board: string[][] = [
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
];

const demo: number[][][] = [[[1]]];
