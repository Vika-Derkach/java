let menu_item = document.querySelectorAll('.menu-item'),
    //ad = document.getElementsByClassName('adv'),
    menu = document.querySelector('.menu'),
    body = document.getElementsByTagName('body'),
    column = document.querySelectorAll('.column');
    ad = document.querySelector('.adv');


//let attitude  


column[1].removeChild(ad);

// function apple() {
//     attitude = prompt("Ваш бюджет?", '');
    
//     while (isNaN(attitude) || attitude == "" || attitude == null) {
//         attitude = prompt("Ваш бюджет?", '');  
//     }; 
// }
// apple();
// console.log(apple());

// function apple() {
//          for (let i = 0; i < 1; i++) {
       
//             let c = prompt("What is your name?");
           
//             if (typeof(c) === 'string' && c != '' && c.length < 50 ) {
//                console.log('Cool answer');
//                mainList.employers[i] = c;
//            } else {
//                console.log(i);
//                i--;
//               }
//        }
//     }     
    
//     apple();

//menu_item[2].style.backgroundColor = "blue";
menu.replaceChild(menu_item[1], menu_item[2]);
menu.replaceChild(menu_item[2], menu_item[1]);
//document.body.removeAttributeNode (menu_item[1]);

//document.body.appendChild(ad);
//ad.textContent = 'bye world';
//menu_item[1].replaceWith(menu_item[2]);
//menu_item[2].replaceWith(menu_item[1]);
//document.body.removeChild(menu_item[1]);
///body.style.backgroundImage = (/img/apple_true.jpg);
let li = document.createElement('li');
let li_2 = document.createElement('li');

menu.appendChild(li);
li.classList.add("menu-item");
li.textContent = 'Пятий пункт';
menu.insertBefore(li_2, menu_item[3]);
li_2.classList.add("menu-item");
li_2.textContent = 'Третий пункт';



