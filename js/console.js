"use strict";

// function hello() {
//     console.log("Hello World");
// }

// hello();

// function hi() {
//     console.log('Say Hi!');
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a - b;
// }

// 1 
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2
console.log(typeof(5 + ''));//string
//to string
const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number 

// 1

console.log(typeof(Number("4")));//old version

// 2
console.log(typeof(+"4"));

// 3 
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "")

// to Boolean

//0, '', null, undefined, NaN   <--all false
// 1
let switcher = null;

if (switcher) {
    console.log('Working...');
}
    switcher = 0;
if (switcher) {
    console.log('Working...');
}

// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!"4444")); //!! == toBoolean