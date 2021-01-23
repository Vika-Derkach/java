const money = prompt("Ваш бюджет?");
const name = prompt("Название вашего магазина?");
const time = 19;

const mainList = {
    budget: money,
    shopName: name,
    open: false,
    shopGoods: [],
 
}




// const employers = {
//     name: "Kata",
//     age: 91,
//     name: "Fina",
//     age: 35,
//     name: "George",
//     age: 47
    
// }

// console.log(employers);


for (let i = 0; i < 5; i++){

    let a = prompt("Какой тип товаров будем продавать?");
    
    if ((typeof(a)) === 'string'  && (typeof(a)) === null && a != '' && a.length < 50 ) {
        console.log('Everthing is okay');
        mainList.shopGoods[i] = a;
    } else {

    }
}

if(time < 0 ) {
    console.log('it cannot be possible');
} else if (time > 8 && time < 20) {
    console.log('time to work')
    } else if(time < 24) {
        console.log('it is too late');
        } else {
            console.log('there are only 24 hours in day');
        }

alert(mainList.budget / 30);

console.log(mainList);

let number = 33721;
console.log(3*3*7*2*1);
console.log(126 ** 3);