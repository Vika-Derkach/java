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
// function myModule() {
//     this.hello = function() {
//         return console.log('hello!');

//     }

//     this.goodbye = function() {
//         return console.log('goodbye!');
//     }
// }

// myModule.exports = myModule;


//export по новому стандарту
export let one = 1;
let two = 2;

export {two};

export function cons() {
    console.log(1)
}