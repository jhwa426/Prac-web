// 1. use strict
// added in ES 5
// use this for valina Javascript.

'use strict';

console.log('Hello world!');

// 2. variable
// let (added in ES 6)

let name = 'jeff';
console.log(name);

name = 'hello';
console.log(name);

// 3. constant
// - security
// - thread safety
// - reduce human mistake

const first_name = 'Jaeyoung';
console.log(first_name);

const daysInWeek = 7;
const MaxNumber = 5;

// 4. Variable types
// number 
const count = 17; //integer
const size = 1.7; // float

console.log(count, typeof(count));
console.log(size, typeof(size));

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);

// boolean
// fasle : 0, null, undefined, Nan, ''
// true: any other number

// null
let nothing = null;

//undefined
let x; //or let x = undefined;

// symbol (False)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

// symbol (True)
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 == gsymbol2);

// object
const jeff = { name: 'jeff', age : 25};
console.log(jeff);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
text = 6 + '1';
console.log(`value: ${text}, type: ${typeof text}`);

