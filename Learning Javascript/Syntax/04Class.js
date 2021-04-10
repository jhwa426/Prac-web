'use strict';
// 1. Class
//class object-oriendted programming
//class: template
//object: instance of a class

class Person {
    //constructor
    constructor (name, age) {
        //field
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const detail = new Person('jeff', 25);
console.log(detail.name);
console.log(detail.age);
detail.speak();


//2. Getter and setters
class user {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        if (value <= 0) {
            throw Error('age can not be less than 0');
        }
        this._age = value;
    }
}

const user1 = new user('steve', 'job', 10);
console.log(user1.age);

// 3. Inheritance

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('💕');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 4. Class instanceof

console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); //True
console.log(triangle instanceof Object); //True  
