// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
//or
var ages2 = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (array) {
    return array.reduce(function (acc, product) { return acc + product.price; }, 0);
};
var result = getTotal([
    { name: 'Milk', price: 5 },
    { name: 'Bread', price: 7 },
    { name: 'Carrot', price: 2 },
    { name: 'Pork', price: 3 },
    { name: 'Beef', price: 100 },
]);
console.log(result);
