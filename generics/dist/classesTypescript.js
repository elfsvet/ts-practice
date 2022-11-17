"use strict";
// Generics
// Generics allow ut to define reusable functions and classes that work with multiple types rather than a single type.
// The syntax is... not pretty. They are used all over the place, so it's best to get comfortable with them:)
function wrapInArray(element) {
    return [element];
}
// function doThing(thing: number | string) : number | string{
// }
// const nums: number[] = []
const nums = [];
const colors = [];
// using generic
// guerySelector is generic function that excepts some type inside, and it will return the element of that type
const inputEl = document.querySelector('#username');
console.log(inputEl);
console.dir(inputEl);
inputEl.value = 'Hacked!';
const btn = document.querySelector('.btn');
// create a generic
function numberIdentity(item) {
    return item;
}
// create a generic
function stringIdentity(item) {
    return item;
}
// create a generic
function booleanIdentity(item) {
    return item;
}
// function identity(item: any):any{
//     return item;
// }
// same as string string string
// function identity<string>(item: string): string {
// function identity<genericType>(item: genericType): genericType {
// function identity<T>(item: T): T {
// function identity<Cat>(item: Cat): Cat {
function identity(item) {
    return item;
}
identity(7);
identity('string');
identity({ name: 'Meow', breed: 'scottish' });
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 12313, 1231313, 2342424, 4654567457,
]));
// let x = 234;
// it can assume the type but not always. You need to provide it sometimes. Like with button. It will use default.
// here we rely on typescript to infer the type
console.log(getRandomElement([1, 2, 3, 4]));
// generic function merge with generic types and if first is T the second is U and so on as in alphabet.
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
// merge<name: string}, {pets: string[]}>({name:'colt'},{pets: ['blue','elton']})
merge({ name: 'colt' }, { numbers: [34, 434, 344, 34] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
//  different way to achieve the same result:
// function printDoubleLength(thing: Lengthy): number {
//   return thing.length * 2;
// }
printDoubleLength('adgajkgfls');
// printDoubleLength(34) //wont work
// if we want to provide a default type
function makeEmptyArray() {
    return [];
}
const newNums = makeEmptyArray();
const string = makeEmptyArray();
const bools = makeEmptyArray();
// class VideoPlaylist {
//   public videos: Video[] = [];
// }
// class SongPlaylist {
//   public songs: Song[] = [];
// }
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const video = new Playlist();
songs.add({ title: 'Never', artist: 'Dima' });
video.add({ title: 'Titanic', creator: 'Spilberg', resolution: '4K' });
console.log(songs.queue);
