"use strict";
// class Player {
//   // first we need to assign types to this properties
//   public readonly first: string;
//   //    readonly modifier could be used in classes to protect from changing the assign values. You can read but you can't write to it.
//   public readonly last: string;
//   //   class property syntax
//   private score: number = 0; // private with TS or JS with# private identifier
//   numLives: number = 10;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//    private secretMethod(): void{
//     console.log("secret method");
//   }
// }
class Player {
    constructor(first, last, _score // shortcut for previous creation . Parameter properties // one more protected and it only accessable in child classes // only accessable in difined in use private
    ) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log('secret method');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative!');
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 99999999;
    }
}
const elton = new Player('elton', 'steele', 100);
elton.fullName;
elton.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'red');
// interface Payable {
//   getPay(): number;
// }
// abstract classes
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('Hello');
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee('betty', 'White', 96000);
console.log(betty.getPay());
const bill = new PartTimeEmployee('Bill', 'Billerson', 28, 1100);
console.log(bill.getPay());
