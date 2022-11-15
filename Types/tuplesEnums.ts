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

// Enums allow us to define a set of named constants. We can give these constants numeric or string values.

// There's quite a few options when it comes to enums!

// // Numeric Enums
// enum Responses {
//   no,
//   yes,
//   maybe,
// }

// enum Responses {
//   no = 2,
//   yes,
//   maybe,
// }

// enum Responses {
//   no = 2,
//   yes = 10,
//   maybe = 24,
// }

// // String Enums
// enum Responses {
//   no = 'No',
//   yes = 'Yes',
//   maybe = 'Maybe',
// }

// // Heterogenous Enums
// enum Responses {
//   no = 0,
//   yes = 1,
//   maybe = 'Maybe',
// }

// UP   DOWN  LEFT  RIGHT PENDING SHIPPED DELIVERED
// const PENDING = 0;
// const SHIPPED = 1;
// const DELIVERED = 2

// if ( === DELIVERED){

// }

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

const order = {
  orderNumber: 200098098,
  status: OrderStatus.PENDING,
};
