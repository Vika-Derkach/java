let money,
    name,
    time,
    price,
    yourName


function start() {
        money = prompt("Ваш бюджет?", '');
        
        while (isNaN(money) || money == "" || money == null) {
            money = prompt("Ваш бюджет?", '');  
        }

        name = prompt("Название вашего магазина?", '').toUpperCase();
        time = 21;
        price = 100
}
start();

const mainList = {
    budget: money,
    shopName: name,
    open: false,
    shopGoods: [],
    employers: [],
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
       
           let a = prompt("Какой тип товаров будем продавать?", '');
           
           if (typeof(a) === 'string' && a != '' && a.length < 50 ) {
               console.log('Everthing is okay');
               mainList.shopGoods[i] = a;
            } else {
               console.log(i);
               i--;
              }
          }
        },  
    workTime: function workTime(time) { 
        if(time < 0 ) {
            console.log('it cannot be possible');
        } else if (time > 8 && time < 20) {
            console.log('time to work');
            mainList.open = true;
            } else if(time < 24) {
                console.log('it is too late');
                } else {
                    console.log('there are only 24 hours in day');
                }
      },
    dayBudget:  function dayBudget() {
            alert("Ежедневний бюджет " + mainList.budget / 30);
        },
    makeDiscount: function makeDiscount() {
            if (mainList.discount == true) {
                price = (price/100)*80;
            }
        },
    ourEmployers: function ourEmployers() {
            for (let i = 0; i < 4; i++) {
           
               let c = prompt("What is your name?");
               
               if (typeof(c) === 'string' && c != '' && c.length < 50 ) {
                   console.log('Cool name');
                   mainList.employers[i] = c;
               } else {
                   console.log(i);
                   i--;
                  }
           }
        },    
     chooseShopItems: function chooseShopItems() {
           let items = prompt("ПЕречислете через запетую ваши товари", "");
           mainList.shopItems = items.split(",");
           mainList.shopItems.push(prompt("продолжить еще", ""));
           mainList.shopItems.sort();
     },
        
   }



let arr = [ "shirts", "socks", "trausers"];
//arr[3] = 3;

console.log(arr.length);

arr.forEach(function(item,i,arr) {
         console.log((i + 1) + ": " + item + "У нас вы можете купить: " + arr + ".");
     });

//arr.unshift(0);

alert("У нас вы можете купить: " + arr);
 console.log(arr);


 let options = ["Товари", "услуги", "бити"];
     
    
for( let key in options) {
    console.log('Наш магазин включает в себя: ' + options[key])
}
console.log(Object.keys(options).length);
// const employers = {
//     name: "Kata",
//     age: 91,
//     name: "Fina",
//     age: 35,
//     name: "George",
//     age: 47
    
// }
// 0 undefined null false !!(undefined)
// !undefined === !null 
// console.log(employers);
//&& i / || or 
//(1===2 && 1===1 ) === false
//(true && 0 ) === false
//(1 && 2 ) === 2
//(0 && 2 ) === 0
//(true && false ) === false
//!true === false
//!!true === false
//(1===2 || 1===1 ) === true
//(1 || 0 ) === 1
//(null || undefined && 0 ) === 1
//(0 || undefined || 0 ) === 1
//(1 && 2 ) === 2
//(0 && 2 ) === 0

// function chooseGoods() {
//         for (let i = 0; i < 5; i++) {
       
//            let a = prompt("Какой тип товаров будем продавать?", '');
           
//            if (typeof(a) === 'string' && a != '' && a.length < 50 ) {
//                console.log('Everthing is okay');
//                mainList.shopGoods[i] = a;
//            } else {
//                console.log(i);
//                i--;
//               }
//        }
// }     
//chooseGoods();

///console.log(shopGoods);

// function ourEmployers() {
//     for (let i = 0; i < 4; i++) {
   
//        let c = prompt("What is your name?");
       
//        if (typeof(c) === 'string' && c != '' && c.length < 50 ) {
//            console.log('Cool name');
//            mainList.employers[i] = c;
//        } else {
//            console.log(i);
//            i--;
//           }
//    }
// }     

// ourEmployers();

// function makeDiscount() {
//     if (mainList.discount == true) {
//         price = (price/100)*80;
//     }
// }

// function withDiscount(){
//     if(discount === true) {
//         return (80 * price) / 100;
//     }
//     return price;
// }

// price = withDiscount(price);


// function workTime(time) { 
//     if(time < 0 ) {
//         console.log('it cannot be possible');
//     } else if (time > 8 && time < 20) {
//         console.log('time to work')
//         } else if(time < 24) {
//             console.log('it is too late');
//             } else {
//                 console.log('there are only 24 hours in day');
//             }
// }
//workTime(19);

//let a = mainList.budget;
//let b = 30;


// function dayBudget() {
//     alert("Ежедневний бюджет " + mainList.budget / 30);
// }


// function showBudget(a, b) {
//     const value = a/b;
//     alert(value);
//     return value
    
// }

// console.log(showBudget (mainList.budget, 30));
//alert(mainList.budget / 30);
//alert();

console.log(mainList);


let number = 33721;
console.log(3*3*7*2*1);
console.log(126 ** 3);