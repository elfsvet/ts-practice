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
  constructor(
    public first: string,
    public last: string,
    protected _score: number // shortcut for previous creation . Parameter properties // one more protected and it only accessable in child classes // only accessable in difined in use private
  ) {}

  private secretMethod(): void {
    console.log('secret method');
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error('Score cannot be negative!');
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}

const elton = new Player('elton', 'steele', 100);
elton.fullName;
elton.score = 99;

// interfaces with classes
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}
class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'red');

// interface Payable {
//   getPay(): number;
// }

// abstract classes
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number; // means must be implemented in the child classes with this method
  greet(): void {
    console.log('Hello');
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('betty', 'White', 96000);
console.log(betty.getPay());

const bill = new PartTimeEmployee('Bill', 'Billerson', 28, 1100);
console.log(bill.getPay());
