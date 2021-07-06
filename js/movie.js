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
//*****************************************************************************************************************



//part2****************************************************************************************************

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
}*/

//part3****************************************************************************************************
/* 
const numberOfFilms = prompt ('How many films you watched?', '');

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
//part4**************************************************************************
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many films you watched?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == ' ') {
//         numberOfFilms = +prompt('How many films you watched?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('One of latest watched films?', ''),
//               b = prompt('How do you rate it?', '');
    
//         if (a != null &&  b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;  // []bilan yoziw togriroq
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
    
//     } 
// }

// //rememberMyFilms();




// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Not much movies');
//     }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Average spectator');
//     }   else if (personalMovieDB.count >= 30) {
//         console.log('Your are cinemaddict');
//     }   else {
//         console.log("oops Error!");
//     }
// }

// //detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Your favourite genre ${i}`);; //-1 yozsa 0dan bowlanadi for
//     }
// }

// writeYourGenres();


//******************************************************************************************************************* */





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == ' ') {
            personalMovieDB.count = +prompt('How many films you watched?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Not much movies');
        }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Average spectator');
        }   else if (personalMovieDB.count >= 30) {
            console.log('Your are cinemaddict');
        }   else {
            console.log("oops Error!");
        }
    },
    showMyDB:function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }, 
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            // let genre = prompt(`Your favourite genre ${i}`);

            // if (genre === '' || genre == null || genre == ' ') {
            //     console.log('Wrong data!');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre; //-1 yozsa 0dan bowlanadi for
            // }
            let genres = prompt(`Write your favourite genre through comma`);

            if (genres === '' || genres == null || genres == ' ') {
                console.log('Wrong data!');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', '); //-1 yozsa 0dan bowlanadi for
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourite genre ${i + 1} - is ${item}`);
        });
    } 
};







