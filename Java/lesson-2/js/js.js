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

//while (num < 55) {
    //console.log(num);
    //num++;
//}

//do {
  //  console.log(num);
  //  num++;
//}
//while (num <55);

for (let i = 0; i < 8; i++) {
    console.log(i);
}

