// //task1
// let x = 1;
// let y = 2;
// y = "2";
// let res1 = x + y;
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// x = true;
// let res2 = x + y;
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = (y != x)
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// x = 5*'data1';
// y = 5*'data2';
// let res4 = x + y;
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// //task2
// let data1 = prompt("Enter your number");
// console.log (data1 % 7 == 0 );//кратним числу 7.
// console.log (data1 % 2 >= 0 );//парним додатним

// //task3
// const arr1 = [1,"element2", true, null ];
// console.log(arr1.length);//число елементів, яке зберігається в масиві;
// arr1[4] = prompt ("Enter your data");
// console.log( arr1[4] );
// arr1.shift();
// alert(arr1);
 // task4
// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[0] + "*" + cities[1] + "*" + cities[2]);
 // task5
// let isAdult1 = prompt ("How old are you?");
// if (isAdult1 >= 18 ) {
//     alert("You have already reached the age of majority");
// } else if (isAdult1 < 18 ) {
//     alert("You are too young");
// };
// task6
// a) визначити і вивести в консоль площу трикутника 
let A = prompt ("Enter any value for A side of a triangle" );
let B = prompt ("Enter any value for B side of a triangle" );
let C = prompt ("Enter any value for C side of a triangle" );
A = Number(A);
B = Number(B);
C = Number(C);

const p = ((A+B+C)/2);
const S = Math.sqrt(p*(p-A)*(p-B)*(p-C));
console.log(S);
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
let a = Math.pow(A,2);
let b = Math.pow(B,2);
let c = Math.pow(C,2);
let data2 = c
let data1 = a + b
data2 = Number(data2);
data1 = Number(data1);

    if (data1 = data2){
        console.log("");​
    } else {​
       console.log("Incorrect data");​
    }​
//  task7
// if..else..if statement
// let date = new Date ();
// let hours = (date.getHours());
// let data1 = hours;
// if (data1 = 23|0|1|2|3|4){
//     alert("Доброї ночі");
// }
// else if (data1 = 5|6|7|8|9|10) {
//     alert("Доброго ранку");
// }
// else if(data1 = 11|12|13|14|15|16) {
//     alert("Доброго дня");
// }
// else{
//     alert("Доброго вечора");
// }
// switch statement.
// let date1 = new Date ();
// let hours1 = (date1.getHours());
// let data1 = hours1;
// switch(data1){

//     case 23 :
//     case 0 :
//     case 1:
//     case 2:
//     case 3: 
//     case 4: 
//          alert("Доброї ночі");
//          break;
//     case 5 :
//     case 6 :
//     case 7:
//     case 8:
//     case 9: 
//     case 10: 
//          alert("Доброго ранку");
//          break;
//     case 11 :
//     case 12 :
//     case 13:
//     case 14:
//     case 15: 
//     case 16:
//         alert("Доброго дня");   
//          break;   

//     default: 
//          alert("Доброго вечора");
//          break;
//  }