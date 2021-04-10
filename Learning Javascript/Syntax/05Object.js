'use strict';

// 1. object (Literals and properties)
// object = {key : value }; Ex) 파이썬에서는 딕셔너리랑 유사함.


function print(person) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.sex);
}
// object
const obj1 = {}; //object literal
const obj2 = new Object(); // object constructor 

const jeff = {name: 'jeff', age: 25, sex: 'Male'}; // object
const ellie = {name: 'ellie', age: 4, sex: 'Female'}; // object

print(jeff);
print(ellie);

// 2. Computed properties ([]);
// key should be always string type!!! not consol.log(jeff[age]); ------> consol.log(jeff['age']);

console.log(jeff.name);
console.log(jeff['name']);
console.log(jeff['age']);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(jeff, 'name');
printValue(ellie, 'age');


// 3. Property value shorthand

const person1 = {name: 'bob', age: 25};
const person2 = {name: 'steve', age: 22};
const person3 = {name: 'dave', age: 21};
const person4 = {name: 'jeff', age: 25};
console.log(person4);

function makePerson(name, age) {
    return{
        name: name, // name,
        age: age, // age,
    }

}

// 5. in operatop: property existence check (key in obj)
console.log('name' in jeff);

// 6. for..in vs for..of
// for (key in obj)
console.clear();

for (let key in jeff) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
const user = { name: 'jeff', age: '20' };
const user2 = user;
user2.name = 'Jaeyoung';

console.log(user);
console.log(user2);
user.age = 25;

console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
// new way
Object.assign(user4, user); 
console.log(user4);


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);

