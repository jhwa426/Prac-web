'use strict';


// Javascript is synchronous. 동기적
// Execute the code block in order after hoisting.
// hoisting: var, function declaration.

console.log('1');
setTimeout(function() { // asynchronous method
    console.log('2');
}, 1000);

// setTimeout(() => console.log('2'), 1000);

console.log('3');

// synchronous callback
function printImmediately (print) {
    print();
}

printImmediately(() => console.log('Hello'));
// printImmediately(function() {
//     console.log('he');
// });


// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// callback hell example
console.clear();

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'jeff' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jeff') {
            onSuccess({name: 'jeff', role: 'admin' });
        } else {
            onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
        user,
        userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },

        error => {
            console.log(error);
        }
        );
    },
    
    error => {
        console.log(error);
    }
);