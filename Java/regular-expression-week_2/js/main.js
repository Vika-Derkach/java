//регулярние виражения , метод replace
//console.log('My regex', replace(' ', ' first'));

//поміняли тере на пробели
// let str = "sentences-with-dashes";
// str = str.replace(/-/g, ' ');
// console.log(str);

//флаги i, g, m
// i - ігноруємо регистр
//g- глобальний флаг , чтоби искать во всей строке
// m- многострочний флаг

// let str = 'helLo hi , i am learning javascript ';
// reg = /l/gi;
// str = str.replace(reg, '_')
// console.log(str);
//gi - замінюють всі

//класи
// \d digit цифри от 0 до 9
// \s space пробели, таби, переводи строки и тд
// \w word буква латинського алфавита , цифра или подчоркивание
// \b граници слова
// \D \S \W \B
//. - любой символ, кроме перевода строки

// let str = '5 minutes free time - it is too much to learn javascript';
// reg = /\d/g;
// str = str.replace(reg, '*');
// console.log(str);

//квантификатори
// {n} - количество символов
// + - один и болия символов (все ровно что {1, })
// ? - ноль или один символ (0, 1)
// * - ноль и болие (0, )

let str = '123 Do you like Ivan?';
let reg = /\d{2}/;
str = str.replace(reg, '*');
console.log(str);