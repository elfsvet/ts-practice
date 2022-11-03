let movieTitle: string = 'Titanic';
movieTitle = 'Arrival';
console.log(movieTitle.toLowerCase());
movieTitle = 0;

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;

let x = 28;
x = 'hey';

let nothing: null = null;
let foo: undefined = undefined;

let tvShow = 'Olive Kitteridge';
tvShow = 'The Other two';
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = 'asd';

// the any type
let thing: any = 'hello';
thing = 1;
thing = false;
// thing();
// thing.toLowerCase();

// declare a variable before

const movies = ['Arrival', 'The Thing', 'Alien', 'Amadeus'];

let foundMovie: string;

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus';
  }
}

console.log(foundMovie);
