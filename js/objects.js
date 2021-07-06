"use strict"

//const obj = new Object(); //xato

/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}; */

// console.log(options.name);
//console.log(options["colors"] ["border"]);
// delete options.name;

// console.log(options);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Property ${i} has a value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key } has a value ${options[key]}`);
//     }
// } 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length); //massiv



//object assign


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); //objectni bir biriga qowiw

clone.d = 20;

console.log(add);
console.log(clone);

//kopiya massiva

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); //masssivni kochirgani


newArray[1] = 'asadadadad';
console.log(newArray);
console.log(oldArray);


//yana bitta yoli massiv kochirgani
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
      
console.log(internet);


//


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};




///oop




