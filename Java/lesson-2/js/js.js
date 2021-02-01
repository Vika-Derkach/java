let num = 50;

if( num < 49) {
    console.log('You are wrong')
 } else if(num > 100) {
     console.log('You are wrong')
    } else {
        console.log('you are right')
    }
(num == 50)? console.log('You are right') : console.log('You are wrong');

if(4*2 == 7*1) {
   console.log('You are right')
} else {
    console.log('You are wrong')
}

switch (num) {
    case 49:
        console.log('not enouph');
        break;
    case 100:
        console.log('too much');
        break;
    case 80:
        console.log('still too much');
        break;
    case 50:
        console.log('yeah, in the spot');
        break;
    default:
        console.log('not in this time');
        break; 
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

//do {
  //  console.log(num);
  //  num++;
//}
//while (num <55);



//HW

// for (let i = 0; i < 8; i++) {
//     console.log(i);
// }

 let i = 0;

// while ( i < 8) {
//     console.log(i);
//     i++;
// }

do {
   console.log(i);
   i++;
}
while (i < 8);


//added tast
// let x = 5; 
// alert( x++ ); 


let y = 1; let x = y = 2; alert(x); 


//знайти суму додатих чисел до вказаного
function numSum(n){
    var sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
    console.log(sum)
         }
numSum(5);

