var dog = {
    name: 'elton',
    breed: 'as',
    age: 0.5
};
var printName = function (name) {
    return "Name: ".concat(name.first, " ").concat(name.last);
};
console.log(printName({ first: 'Stepan', last: 'Matysik' }));
// {x: number, y : number} pattern
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// express properties
printName({ first: 'Mick', last: 'Jagger' });
var singer = { first: 'Mick', last: 'Jagger', age: 34 };
printName(singer);
printName({ last: 'Shevelev', first: 'Mikhail' });
var sayHappyBirthday = function (person) {
    return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age, "!");
};
console.log(sayHappyBirthday({ name: 'Stepan', age: 32 }));
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
// nested objects
// a function with a nested object type parameter
var describePerson = function (person) {
    return "Person: ".concat(person.name, ",\n  Age: ").concat(person.age, ",\n  parents: ").concat(person.parentNames.mom, ", ").concat(person.parentNames.dad, ".");
};
console.log(describePerson({
    name: 'Stepan',
    age: 32,
    parentNames: { mom: 'tanya', dad: 'Uriy' }
}));
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Unchained Melody',
    artist: 'Righteous Brouthers',
    numStreams: 1234567,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
};
console.log(calculatePayout(mySong));
printSong(mySong);
