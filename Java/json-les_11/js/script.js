// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: "16px",
//         color: "#fff"
//     }
// }
// //в сервер щось кинути
// console.log(JSON.stringify(options));

//копія обєкта
//console.log(JSON.parse(JSON.stringify(options)));


let request = new XMLHttpRequest();
//1) создайом обєкт запроса

request.open("GET", 'server.php', true, login, password);

//настроели запрос
request.send()
//отправили запрос
request.status
request.statusText 
request.responseText
request.readyState