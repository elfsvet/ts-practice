// Interfaces
// use the type alias in the annotation
var sayHappyBirthday = function (person) {
  var name = person.name,
    age = person.age;
  return 'Hey '.concat(name, ', congrats on turning ').concat(age, '!');
};
sayHappyBirthday({ name: 'Stepan', age: 32 });
var pt = { x: 12, y: 344 };
var thomas = {
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  id: 2043434,
  sayHi: function () {
    return 'Hello';
  },
};
thomas.first = 'Ttom';
var shoes = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount: function (amount) {
    var newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};
console.log(shoes.applyDiscount(0.4));
