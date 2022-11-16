// classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects.

// A recap of JS classes
/*
- constructors
- class fields
- getters and setters // object accessors 
- private #fields
- static fields/methods
- inheritance
- super()
*/

class Player {
  // method constructor create an instance of player and relate to this

  #score = 0; // _score is private don't touch it from outside. # tells js only use it inside the class
  #numLives = 10; // is better then in this but only for hardcoded values
  constructor(first, last) {
    this.first = first;
    this.last = last;
    // this.score = 0;
    // this.numLives = 10;
  }
  get score() {
    return this.#score
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log('booyah!');
  }
  loseLife() {
    this.#numLives -= 1;
    // this.#secret();
  }
  #secret() {
    console.log('Secret!!!');
  }
}

const player1 = new Player('blue', 'steel');
player1.taunt();
// player1.loseLife();
console.log(player1.first, player1.last, player1, player1.fullName, player1.score);

// console.log(player1.getScore());
player1.updateScore(34);
// console.log(player1.getScore());


// const player2 = new Player('charlie', 'brown');
// player2.taunt();
// console.log(player2.first, player2.last);
