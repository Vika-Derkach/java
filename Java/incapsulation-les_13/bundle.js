(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var myModule = require('./script.js'); ///через шлях

let myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();
},{"./script.js":2}],2:[function(require,module,exports){
// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         alert(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     }
//     //получає параметри з приватних свойств
//     this.getAge = function() {
//         return userAge
//     }
//     this.setAge = function(age) {


//          if( typeof age === 'number' && age>0 && age <110) {
//              userAge = age;
//          } else {
//              console.log('недапустимое значение');
//          }
//     }
// }
// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.getAge());
// //змінений возраст
// ivan.setAge(23);
// console.log(ivan.getAge());

// ivan.say();



//modules


// //функшн expresion
// let number = 1;

// (function(){
   
//    let number = 2;
//    console.log(number);

//    return console.log(number + 3)

// }()); //дужки які її визивають- функцію //виведе 2, 5 

// console.log(number) // виведе 5


//обєктний інтерфейсє
// let user = (function() {
   

//     let privat = function() {
//        console.log("I am privat!")
//     };
    

//     let sayHello = function(){
//         console.log('Hello!')
//     };

//     return {
//         sayHello : sayHello,
//         privat: privat
//     }
// }());

// console.log(user.sayHello()); //виведе hello
// console.log(user.privat());



//practice
function myModule() {
    this.hello = function() {
        return console.log('hello!');

    }

    this.goodbye = function() {
        return console.log('goodbye!');
    }
}

myModule.exports = myModule;
},{}]},{},[1]);
