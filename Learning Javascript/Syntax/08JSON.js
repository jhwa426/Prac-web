'use strict';

// JSON (Javascript object notation)
// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

console.clear();

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

console.clear();


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Jeff' : value;
});
console.log(json);

console.clear();

// 2. JSON to Object

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
console.log(obj.birthDate);
