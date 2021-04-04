'use strict';

// 1. string concatenation
console.log('My' + ' cat');
console.log('1' + 2);
console.log('string literals : ');
console.log('Jeff\'s iPhone');

// 2. Numeric operators
// +, -, /, *, &, **

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement); //3

ncrement = counter++;

const postIncrement = counter++;
console.log(postIncrement);

// 4. Assignment operator
// +=
// -=
// *=
// /=


// 5. Comparison operators
// <
// >
// <=
// >=

// 6. Logical operators ( || (or),  &&(and), !(not))
const value1 = true;
const value2 = 4 < 2; //False

// || (or)
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('WOW');
    }
    return true;
}

//7. equality
// equality ==
const stringFive = '5';
const numberFive = 5;

// == looese equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false


// stric equality === (타입이 같아야 true)
const jeff1 = { name: 'jeff'};
const jeff2 = { name: 'jeff'};
const jeff3 = jeff1;

console.log(jeff1 == jeff2); //false ---> because they have a diffrent refernces each other.
console.log(jeff1 === jeff2); //false
console.log(jeff1 === jeff3); //true
console.log(stringFive !== numberFive); // true
console.log(stringFive === numberFive); // false

// 8. conditional operators: if

const name = 'jeff';
if (name === 'jeff') {
    console.log('Welcome, Jeff');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
//condition ? value1 : value 2;
console.log(name === 'jeff' ? 'yes' : 'no'); // Use it when if else statment is simple otherwise, it is hard to read.

// 10. Switch statement 
// when parameter is the same, that might be useful.
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
        console.log('love you');
        break;
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. loops
// while statement
let i = 3;
while (i > 0) {
    console.log(`While ${i}`);
    i--;
}

// do while statement
do {
    console.log(`do while: ${i}`);
    i--;
}   while (i > 0);

//for statement

for (let k = 3; k > 0; k -= 2) { //(let k는 지역변수이므로 for statement 안에서 적용함)
    console.log(`inline variable for: ${k}`);
}

//Q1 iterate from 0 to 10 and print only even numbers (use continue)

for (let x = 0; x <= 10; x +=1 ) {
    if (x % 2 != 0) {
        continue;
    } else {
        console.log(`Good ${x}`);
    }
}

//Q2 iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let n = 0; n <=10; n +=1 ){
    if (n > 8) {
        break;
    } else {
        console.log(`Hello ${n}`);
    }
}

