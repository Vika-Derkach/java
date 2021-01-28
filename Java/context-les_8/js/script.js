// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         alert("Hello, " + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     alert("подльзователь " + this.name + " ушол");
// }

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// //висвідчується привіт іван
// // ivan.hello();
// // alex.hello();

// ivan.exit();


// //якщо хочемо, щоб js не пробачав мелкие помилки
// "use strict"
// let num = 4; //без нічого не можна
// console.log(num);


// //(перемение)
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b

//     }
//     console.log(sum());

// }
// showThis(4, 5);
// showThis(5, 5);

//методи обєктів
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
       
//         console.log(this);
       
//     }
// }
// obj.sum();


//1) просто визов функции - обєтом будет віндов фбо андефайнт
//2)если визиваетса как метод то this будет равен обєкту
//3)  если функция используетса как конструктор (через (new)) = this = только что зозданаму обєкту
//4) указанее конкретного контекста здійснюється через call, apply, bind

// let user = {
//     name: "John"
// }

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));


// //множить
// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));


// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red'
//     //console.log(this)
// });

let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', ()=> {
    //this.style.backgroundColor = 'red'
    console.log(this)
});
