let name = "Ivan",
    age = 30,
    mail = 'ex@gmail.com';

//записує те що пишк
// document.write("пользователю " + name + ' ' + age + ' лет. Его почтовий адрес: ' + mail);

//робить як минула , тільки по новому стандарту
// document.write(`пользователю ${name} ${age}  лет. Его почтовий адрес: ${mail}`);


//вийде три десятки, при вар переменна тільки одна
// function makeArray() {

//     var items = [];

//     for (var i = 0; i < 10; i++){
//         var item = function() {
//             console.log(i);

//         }
//         items.push(item);
//     }
//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();


// // вийде 1, 3, 7 ( при використтанні лет і const для кожного створюється своя перемннна)
// function makeArray() {

//     let items = [];

//     for (let i = 0; i < 10; i++){
//         let item = function() {
//             console.log(i);

//         }
//         items.push(item);
//     }
//     return items;
// }

// let arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();


//стрелочная функция берет контекст у тово што ее окружає
// let obj = {
//     number: 5,
//     sayNumber: function() {
//         let say = () => {
//             console.log(this)
//         }
//         console.log(this);
//         say();
//     }
// }
// obj.sayNumber();


// //передає саму кнопку
// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
//     let show = () => {
//         console.log(this);
//     }
//     show();
// });


//множтить
// function calcOrDouble(number, basis) {
//     basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3, 5);


//множить на два число 
// function calcOrDouble(number, basis) {
//     basis = basis || 2;
//     console.log(number * basis);
// }

// calcOrDouble(3);


// // множить на два в новому стандарті
// function calcOrDouble(number, basis = 2 ) {
//     console.log(number * basis);
// }

// calcOrDouble(10);


// //множить чило на число в новому стандарті
// function calcOrDouble(number, basis = 2 ) {
//     console.log(number * basis);
// }

// calcOrDouble(10,5);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;

//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 15);
// console.log(square.calcArea());

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Привет!</h1>";

        newDiv.style.cssText = `color: ${this.bg}; font-size: ${this.fontSize}px;`;
        let my_div = document.querySelector('.bye');
        const body = document.querySelector('body');
        body.insertBefore(newDiv, my_div);
    }
     
}

const option = new Options(20, 1000, 'red', 20, 'center');
option.createDiv();

// document.body.onload = addElement;
// var my_div = newDiv = null;

// function addElement() {

//   // Создаем новый элемент div
//   // и добавляем в него немного контента

//   var newDiv = document.createElement("div");
//       newDiv.innerHTML = "<h1>Привет!</h1>";

//   // Добавляем только что созданый элемент в дерево DOM

//   my_div = document.getElementById("org_div1");
//   document.body.insertBefore(newDiv, my_div);
// }
