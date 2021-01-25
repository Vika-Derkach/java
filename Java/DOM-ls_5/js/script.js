let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'), //виділяє всі( а дальше можна позначати який хочемо)
    oneHeart = document.querySelector('.heart'); //виділяє перший, зручно коли такий елемент на ст один


 box.style.backgroundColor = "blue";
 btn[1].style.borderRadius = '100%';

 circle[0].style.backgroundColor = 'red';
 circle[1].style.backgroundColor = 'yellow';
 circle[2].style.backgroundColor = 'green';
 //circle[3].style.backgroundColor = 'green';

//console.log(box);
// шукаємо по номеру
//console.log(btn[0]);
// получаємо 3 елемент, бо поченається з 0 рахунок
//console.log(circle[2]);
//console.log(heart[1]);
//console.log(oneHeart);

let div = document.createElement('div');
let text = document.createTextNode('i was here');

div.classList.add("black");

div.style.backgroundColor = 'black';

//div.classList.remove("black");

// можна доставляти елементи  в кінець , але потрібно від батька йти
document.body.appendChild(div);

//вставити перед чимось (елемент який вставляємо, елемент, перед яким вставляємо)
document.body.insertBefore(div, circle[0]);

//удалять елемент со страници
document.body.removeChild(circle[1]);

//замінити елемент на інший (який переміщуємо, який зникає)
document.body.replaceChild(heart[0], circle[0]);

//що хочемо: текст, кннопку
div.innerHTML = 'Hello World';

//тільки текст 
box.textContent = 'bye world';