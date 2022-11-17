import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { add, multiply, divide } from './utils';
console.log('from index file');

const elton = new Dog('elton', 'Aussie', 0.5);
elton.bark();

console.log(add(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

const buffy = new ShelterDog('buffy', 'Pitbull', 5, 'Desert Springs Shelter');
