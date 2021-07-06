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

//part1************************************************************************************************************************************
/* const numberOfFilms = +prompt('How many films you watched?', '');

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

      personalMovieDB.movies[a] = b;  // a ga b di javobi keladi
      personalMovieDB.movies[c] = d;

      
    //   personalMovieDB.movies.a = b;  //yaxwi sintaaksismas .a .c qilib yoziw bu yerda
    //   personalMovieDB.movies.c = d;


      console.log(personalMovieDB);
 */
//*************************************************************************************************************************


//условия***********conditions***************************************************************************************

/* if (4 == 9) {
    console.log('ok!');
} else {
    console.log('error!');
} */

/* const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('A lot');
} else {
    console.log('ok!');
} */
/*  const num = 50;
(num === 50) ? console.log('ok!') : console.log('Error'); ///ternarniy 3talik
4+4 // binarniy 2talik
+'4' //unarniy 1talik
 */

/* const num = 50;
switch (num) {
    case 49:
        console.log('wrong');
        break;
    case 100: 
        console.log('wrong');
        break;
    case 51:
        console.log('right');
        break;
    default:
        console.log('Next time((');    

 } */
/* 
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}
 */

/* let num = 51;
do {
    console.log(num);
    num++;
}
while (num < 56);
 */
// for (let i = 1; i < 8/*  !!! 0 infinite */; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }



/* const numberOfFilms = +prompt ('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of latest watched films?', ''),
      b = prompt('How do you rate it?', ''),
      c = prompt('One of latest watched films?', ''),
      d = prompt('How do you rate it?', '');

personalMovieDB.movies[a] = b;  // []bilan yoziw togriroq
personalMovieDB.movies[c] = d;


console.log(personalMovieDB); */




/* const numberOfFilms = +prompt ('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('One of latest watched films?', ''),
          b = prompt('How do you rate it?', '');

        

        personalMovieDB.movies[a] = b;  // []bilan yoziw togriroq
}

console.log(personalMovieDB); */

/* const numberOfFilms = prompt ('How many films you watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('One of latest watched films?', ''),
          b = prompt('How do you rate it?', '');

    if (a != null &&  b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;  // []bilan yoziw togriroq
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('Not much movies');
}   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Average spectator');
}   else if (personalMovieDB.count >= 30) {
    console.log('Your are cinemaddict');
}   else {
    console.log("oops Error!");
}

console.log(personalMovieDB);

 */

 //function array functions********************************************************************************************************
/*  let num = 20;

 function showFirstMessage(text) {
     console.log(text);
    //  let num = 10
     console.log(num);
 }
 showFirstMessage('hello world');
 console.log(num);

function calc(a,b) {
    return (a + b);
    //console.log('unreachable code ');//bu qator hech qachon bajarilmaydi
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello');
};

logger();


const calc = (a, b) => { return a + b };
 */


//methods and string  and numbers***************************************************************

// const str = "test";
// //const arr = [1, 2, 4]

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));  //poisk podstroki
//             //01234567891               
// const logg = "Hello world";
// console.log(logg.slice(6));//sozdan qirqadi kesadi -minus iwledi //world

// console.log(logg.substring(6, 11));//-minus iwlaMEdi  .sozdan qirqadi //world

// console.log(logg.substr(6, 5));//6dan bowlanadi 5ta harf kere//world

// const num = 12.2;
// console.log(Math.round(num));//12

// const test = "12.2px";
// console.log(parseInt(test));//12
// console.log(parseFloat(test));//12.2

