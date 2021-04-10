// 1. function declaration
'use strict';

function printHello() {
    console.log('Hellooooo');
}
printHello();

// 2. Parameters

function changeName(obj) {
    obj.name = 'coder';
}

const jeff = { name: 'jeff' };
console.log(jeff);
changeName(jeff);
console.log(jeff);

// 3. Default parameters (added in ES6)

function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');
showMessage('Hi', 'jeff');

// 4. Rest parameters
function printAll(...args) {
    for (let i = 0; i < args.length; i++);{
        console.log(args[i]);
    }
}


// 5. local scope (지역변수 - 밖에서는 안 을 볼수 없지만 안에서는 밖을 볼 수 있다.)

let globalMessage = 'global';
function printMessage () {
    let message = 'Hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'Hello';
    }
}

printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(result);

function checkIfevenNumber (a) {
    if (a / 2 == 0) {
        return a;
    }
}
const even = checkIfevenNumber(2);
console.log(even); // undefined


// 7. Early return, earlt exit

function upgradeUser(user) {
    if (user.point <= 10)  {
        return;
    }
}
console.log(upgradeUser(10)); // undefined

// First-class function
// 1. Funtion expression

const print = function print() { //anonymous function
    console.log('print');
};

print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// named function
const printYes = function() {
    console.log('Yes!');
}

const printNo = function() {
    console.log('No!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint1 = function () {
    console.log('simplePrint!');
}
console.log(simplePrint1);

const simplePrint2 = () => console.log('simplePrint!');
console.log(simplePrint2);

const add = (a, b) => a + b;

// same with below one.

// const add = function (a, b) {
//     return a + b;
// }

// IIFE : Immediately Invoked Function Expression.
(function hello() {
    console.log('IIFE');
}) (); 

// == hello();


// Quiz
// function calculate(command, a, b)
// commend: add. substract, multiply, modular (remainder)

function calculate (command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'modular':
            return a % b;
        case 'divide':
            return a / b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 5));
