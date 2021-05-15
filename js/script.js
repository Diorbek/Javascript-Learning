"use strict" ;
// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your lastname?', '');
// answers[2] = prompt('how old are you?', '');

// console.log(typeof(answer));
// console.log(typeof(null));


/* const category = "toys" ;
// console.log('https://someurl.com/');
// console.log('https://someurl.com/' + category + '/' +'4'); //concetenation
console.log(`https://someurl.com/${category}/5`); */


/* const user = "dior";

alert(`hello, ${user}`); */


const numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of latest watched films?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('One of latest watched films?', ''),
      d = prompt('How would you rate it?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      
      personalMovieDB.movies.a = b;
      personalMovieDB.movies.c = d;


      console.log(personalMovieDB);


