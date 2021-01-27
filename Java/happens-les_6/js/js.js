let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

// btn[0].addEventListener('click', function(){
//     alert('you have clicked on the button');
//     alert('you have clicked on the button again');
// });


//результат такий як в першій
// btn[0].addEventListener('click', function(){
//     alert('you have clicked on the button');
// });
// // btn[0].addEventListener('click', function(){
// //     alert('you have clicked on the button again');
// // });

// //про порядок, перше те що вище
// btn[0].addEventListener('mouseleave', function(){
//     console.log('ви забрали мишку');
// });

//при наведенні ми відстежуємо
// btn[1].addEventListener('mouseenter', function(){
//     console.log('ви навели на функцію #2');
// });

// //в консоль виводиться коли забераєш
// btn[2].addEventListener('mouseleave', function(){
//     console.log('ви навели на функцію #3, а потім забрали');
// });



// btn[0].onclick = function() {
//     alert('you have clicked on the button');
// }

// //якщо дві однакових виведеться друга, про першу забудуть
// btn[0].onclick = function() {
//     alert('you have clicked on the button again');
// }


link[0].addEventListener('click', function(event){
    event.preventDefault();
    console.log('произойшло собитья : ' + event.type + "на єлементе" + event.target);
});

// виводимо в консоль те що сталося 
// перше подія стається на самому елементі , дитині
btn[0].addEventListener('click', function(event){
    console.log('произойшло собитья bla bla:' + event.type + "на єлементе" + event.target);
});

//дальше на батькові його
overlay.addEventListener('click', function(event){
    console.log('произойшло собитья:' + event.type + "на єлементе" + event.target);
});

btn[1].addEventListener('mouseenter', function(event){
    console.log('произойшло собитья:' + event.type + "на єлементе" + event.target);
});