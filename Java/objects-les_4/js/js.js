// let options = {
//     name: "test",
//     width: 1024,
//     height: 1024
// }

// options.bool = false;
// options.colors = {
//     border: "black",
//     background: "red"
// }

// delete options.bool

// for( let key in options) {
//     console.log('свойство' + key + "имеет значения " + options[key])
// }

// console.log(Object.keys(options).length);
// //console.log(options)

/// масиви !!!!!!!!!!!!!!!!!!!!!!
//let arr = [1,2,3,4,5]

// удаления последниво елемента
//arr.pop();

//виведення в консоль того елемента над яким проводиться дія (видалення)
//console.log(arr.pop());

// додавання елементу в масив
//arr.push(6);

//заберає перший елемент
//arr.shift();

//добавляє
//arr.unshift(0);


//вивести на екран числа
// for (let i = 0; i <arr.length; i++) {
//     alert(arr[i]);
// }


//arr[99] = 99;

//виводе в консоль плюс один ще
// console.log(arr.length);




// arr.forEach(function(item,i,arr) {
//     console.log(i + ": " + item + "(масив: " + arr + ")");
// })

//console.log(arr);



// let first = [1,"second",3,4,5];

// first[99] = 99;

// console.log(first.length);

// // first.forEach(function(item,i,first) {
// //     console.log(i + ": " + item + "(масив: " + first + ")");
// // })

//розділяє через щось (кому) все те,що нам дає пользоваттель
// let first = [];
// let i = prompt("", "")
// first = i.split(",")

// console.log(first);


//обєднує всі слова
// let first = ["dd", "afhghg", "ghghgj", "fhfg"];
// let i = first.join(",");

// console.log(i);


//по алфавіту, не числа!
// let first = ["dd", "afhghg", "ghghgj", "fhfg"];
// let i = first.sort();

// console.log(i);

// сортуємо по номеру
// let first = [1, 15, 30, 2];

// function sortNumber(a,b) {
//     return a - b;
// }

// let i = first.sort(sortNumber);

// console.log(i);

let soldier = {
    health: 400,
    armor: 100
}

let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);