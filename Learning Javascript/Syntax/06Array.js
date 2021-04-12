'use strict';

// Aarry
// 1. array
const arr1 = new Array();
const arr2 = ['apple', 'banana'];

//2. Index position
console.log(arr2[0]); // 1
console.log(arr2[1]); // 2
console.log(arr2.length);

console.log(arr1); // Empty

console.log(arr2[arr2.length - 1]);

console.clear();
// 3. Looping over an array
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

//for of
for (let element of arr2) {
    console.log(element);
}

// forEach
arr2.forEach(function(arr2, index) {
    console.log(arr2, index);
})

// annonymous function
arr2.forEach((arr2) => console.log(arr2));



// 4. Addtion, deletion, copy
// push: add an item to the end
arr2.push('Kale', 'strawberry');
console.log(arr2);

// pop: remove an item from the end
arr2.pop();
console.log(arr2);

// unshift: add an item to the beginning
arr2.unshift('orange', 'blueberry');
console.log(arr2);

// shift : remove an item from the beginning
arr2.shift();
console.log(arr2);

//note !! shift, unshift are slower than pop, push
// splice: remove an item by index position

arr2.push('orange', 'blueberry', 'strawberry');
console.log(arr2);

arr2.splice(1, 4, 'empty1');
console.log(arr2);

// combine two arrays (concatnate)

const arr3 = ['Banana', 'Orange'];
const arr4 = ['Apple'];

const newFruite = arr3.concat(arr4);
console.log(newFruite);

// 5. Searching 
// find index

console.clear();
console.log(arr2);
console.log(arr2.indexOf('blueberry'));
console.log(arr2.indexOf('apple')); // if there is no element, return -1

// includes
console.log(arr2.includes('strawberry')); // includes returns True or False


// last indexOf

console.clear();

console.log(newFruite);
newFruite.push('apple');
console.log(newFruite);
console.log(newFruite.indexOf('apple'));
console.log(newFruite.lastIndexOf('apple'));


console.clear();


const fruits = []
fruits.push('banana', 'apple', 'peach');
console.log(fruits.length);

fruits[5] = 'mango';
console.log(fruits[5]);
console.log(fruits);

fruits.length = 10;
console.log(fruits);

console.log(Object.keys(fruits)); //["0", "1", "2", "5"]

// console.clear();