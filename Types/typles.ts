// Tuples are a special type exclusive to TypeScript (they don't exist in JS)

// Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays

let myTyple: [number, string];

myTyple = [12, 'hello'];
myTyple = [1, 'my'];

const color: [number, number, number] = [255, 0, 255];

// [200, 'OK'];
// [404, 'Not Found'];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'OK']; // only number and string and in the order of n -> string

goodRes[0] = 201;
goodRes.push(123);
console.log(goodRes);
goodRes.pop();
goodRes.pop();
goodRes.pop();
// linked data but could be updated with push and pop

const responses: HTTPResponse[] = [
  [200, 'OK'],
  [404, 'Not Found'],
];
