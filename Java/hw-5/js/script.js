let menu_item = document.querySelectorAll('.menu-item'),
    //ad = document.getElementsByClassName('adv'),
    menu = document.querySelector('.menu'),
    body = document.getElementsByTagName('body'),
    column = document.querySelectorAll('.column');
    ad = document.querySelector('.adv'),
    title = document.getElementById('title'),
    //attitude = prompt("яке ваше відношення до Apple?"),
    answer = document.getElementById('prompt');


// function chooseShopItems() {
//         let attitude = prompt("яке ваше відношення до Apple?", "");
//         mainList.shopItems = items.split(",");
//         mainList.shopItems.push(prompt("продолжить еще", ""));
//         mainList.shopItems.sort();
//   }

//answer.innerHTML = (attitude(""));
column[1].removeChild(ad);
//column[1].removeChild(title);
title.textContent = 'Мы продаем только подлинную технику Apple';
// function apple() {
//     attitude = prompt("Ваш бюджет?", '');
    
//     while (isNaN(attitude) || attitude == "" || attitude == null) {
//         attitude = prompt("Ваш бюджет?", '');  
//     }; 
// }
// apple();
// console.log(apple());

//menu_item[2].style.backgroundColor = "blue";

menu.replaceChild(menu_item[1], menu_item[2]);
menu.replaceChild(menu_item[2], menu_item[1]);
//document.body.removeAttributeNode (menu_item[1]);

//document.body.appendChild(ad);
//ad.textContent = 'bye world';
//menu_item[1].replaceWith(menu_item[2]);
//menu_item[2].replaceWith(menu_item[1]);
//document.body.removeChild(menu_item[1]);
//body.style.background = (/img/apple_true.jpg);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

let li = document.createElement('li');
let li_2 = document.createElement('li');

menu.appendChild(li);
li.classList.add("menu-item");
li.textContent = 'Пятий пункт';
menu.insertBefore(li_2, menu_item[3]);
li_2.classList.add("menu-item");
li_2.textContent = 'Третий пункт';


function apple() {
    let question ;
    for (let i = 0; i < 1; i++) {
  
       question  = prompt("яке ваше відношення до Apple?");
      
       if (typeof(question) === 'string' && question != '' && question.length < 50 ) {
          console.log('Cool answer');
      } else {
          console.log(i);
          i--;
         }
  }
  return question;
}     

//apple();
answer.textContent = apple();


