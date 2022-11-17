"use strict";
// Typeof Guards
// typeof Type Guards involve simply doing a type check before working with a value.
// since unions allow multiple types for a value, we can first check what came through before working with it.
const isTeenager = (age) => {
    // typeof guards
    if (typeof age === 'string') {
        // if age is a string, do this
        console.log(age.charAt(0) === '1');
    }
    if (typeof age === 'number') {
        // if age is a number, do this
        console.log(age > 12 && age < 20);
    }
};
isTeenager(20);
isTeenager(13);
isTeenager(10);
isTeenager('13');
isTeenager('10');
isTeenager('21');
function triple(value) {
    // narrow it down with conditional
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple(10), triple('Hi'));
// Truthiness Guards
// Truthiness Type Guards involve checking a value for being truthy or falsy before working with it.
// This is helpful in avoiding errors when values might be null or undefined.
const printLetters = (word) => {
    // const printLetters = (word?: string) => {
    if (!word) {
        // if word is null, don't loop over it
        console.log(`No word was provided.`);
    }
    else {
        // checking if truthy or falsie
        // if(word){ for (let char of word){ console.log(char)}}
        // Only loop if word exists / is truthy
        word.split('').forEach((letter) => console.log(letter));
    }
};
printLetters('hello');
const el = document.getElementById('idk');
if (el) {
    el;
}
else {
    console.log(`Not found the element.`);
}
// Equality Narrowing
// equality Type Guards involve comparing types to each other before doing certain operations with values.
// By checking two values against one another, we can be sure they're both the same before working with them in a type-specific way.
const someFunc = (x, y) => {
    if (x === y) {
        // x and y are strings in this case
        console.log(x.toUpperCase());
        console.log(y.toUpperCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
};
console.log(someFunc('hel', 'hello'));
const talk = (creature) => {
    if ('meow' in creature) {
        console.log(creature.meow());
    }
    else {
        console.log(creature.bark());
    }
};
const kitty = { meow: () => 'MEOWWW' };
talk(kitty);
// type narrowing using in operator to check if the key in the object
function getRuntime(media) {
    if ('duration' in media) {
        return media.duration;
    }
    else {
        return media.numEpisodes * media.episodeDuration;
    }
}
const titanic = { title: 'Titanic', duration: 180 };
const strangerThing = {
    title: 'Stranger Thing',
    numEpisodes: 42,
    episodeDuration: 60,
};
console.log(getRuntime(strangerThing));
console.log(getRuntime(titanic));
// instanceof Narrowing
// instanceof is a JS operator that allows us to check if one thing is an instance of another (remember prototypes? ).
// This can help us narrow types when working with things like classes.
// union type
function printFullDate(date) {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    else {
        return new Date(date).toUTCString();
    }
}
console.log(printFullDate(new Date()));
console.log(printFullDate('Friday, Jul 2, 2021'));
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'Meow';
    }
    else {
        animal;
        return 'Wooh';
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case 'pig':
            return 'Oink';
        case 'cow':
            return 'Moooo';
        case 'rooster':
            return 'Coooocoooracoooo';
        case 'sheep':
            return 'Beeeeeaaa';
        default:
            // we should never make it here, if we handled all cases correctly
            //  never type
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster',
};
console.log(getFarmAnimalSound(stevie));
// Type Declaration .d.ts contain only type information. These files don't produce .js outputs; they are only use for typechecking. 
