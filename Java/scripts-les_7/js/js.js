
//пересування квадрата

// let btn = document.querySelector(".btn");

// function myAnimation() {
//     let elem = document.querySelector(".box"),
//         pos = 0,
//         id = setInterval(frame, 10);

//         function frame() {
//             if (pos == 300) {
//                 clearInterval(id);
//             } else {
//                 pos++;
//                 elem.style.top = pos + 'px';
//                 elem.style.left = pos + 'px';
//             }
//         }
// }

// btn.addEventListener('click', myAnimation);





//якщо ми хочемо щоб функція виповнилася через якийсь час
// let timerId = setTimeout(func, delay)

// //відміна задержки скріпта в 2 строці
// clearTimeout(timerId)

// function func (x, y)



// let timerId = setInterval()


// let timerId = setTimeout(log, 2000)

// function log() {
//     console.log('Hallo!');
//     timerId = setTimeout(log, 2000)
// }




let btns = document.getElementsByTagName('button'),
    btn_block = document.querySelector('.btn-block');

btn_block.addEventListener('click', function(event) {
    // провірка на імя тега
//    if (event.target && event.target.tagName == 'BUTTON'){
//       console.log('Im the best!')
//    }

  //провірка на імя класа
//    if (event.target && event.target.className == 'first'){
//     console.log('Im the best!')
//  }
 
// перевірка, пишемо тег , а потім імя класа
if (event.target && event.target.matches('button.first')){
    console.log('Im the best!')
 }


});




