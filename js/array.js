"use strict";

// const arr = [1, 2, 3, 6, 8];

// // arr.pop();//oxiridegini ochiradi
// arr.push(10);///oxiriga qowadi
// console.log(arr);

/* const arr = [1, 2, 3, 6, 8];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} */

/* const arr = [1, 2, 3, 6, 8, 10];  
arr[99] = 0;                //xato bu 
console.log(arr.length);
console.log(arr);
 */

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {   //3ta argument boliwi mumkin
//     console.log(`${i}: ${item} this is inside the ${arr}`);
// });



// const str = prompt("", "");
// const products = str.split(","); 
// console.log(products);

// const str = prompt("", "");
// const products = str.split(",");
// console.log(products.join(';'));

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


const arr = [2, 13, 26, 8, 10]
arr.sort(compareNum);
console.log(arr); 

function compareNum(a, b) {
    return a - b;
}