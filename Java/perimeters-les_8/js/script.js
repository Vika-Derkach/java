let box = document.querySelector('.box'),
//якщо хочемо подивитися на те що в середені(скільки воно має)
    width = box.clientWidth,
    height = box.clientHeight,
// разом з бордером
   // width = box.offsetWidth,
    //height = box.offsetHeight;
//коли хочемо захватити всь повністю ширену і довгоду
    // width = box.scrollWidth,
    // height = box.scrollHeight,
    btn = document.getElementsByTagName('button')[0];

//розкривається на повну висоту 
// btn.onclick = function() {
//     box.style.height = box.scrollHeight + 'px'
// }

//виводимо в консоль скільки прокрутили
// btn.onclick = function() {
//          console.log(box.scrollTop);
//     }



//console.log(width);
//console.log(height);

// //координати видає всі 
// console.log(box.getBoundingClientRect());

//конкретні параметри якісь (топ)
// console.log(box.getBoundingClientRect().top);


console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);


//скільки ми прокрутили
console.log(document.documentElement.scrollTop);
// вверх перекидає
document.documentElement.scrollTop = 0;

//пересувамося на скількись піксілів
window.scrollBy(0,500); //(x,y)


//спуститися до якоїсь колрдинати
window.scrollTo(0,200);

