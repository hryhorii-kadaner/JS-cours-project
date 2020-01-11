'use strict';

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: 'Jhon',
    age: 25,
    isMarried: false
};

console.log(person["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

// let answer = confirm("Are you here?");

// let answer = +prompt("Are you 18 y.o.?", "Yes");

// console.log(typeof(answer));

// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);