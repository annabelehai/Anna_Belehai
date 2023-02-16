// task1. Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і 
// цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу
//  (використовуючи аргумент delay) і завершується повідомленням message.

//  function getPromise(message, delay){
// setTimeout(() => {
//  console.log(message);
//  },delay);
// }    

//  getPromise("test promise", 2000).then(function(data) {
//     console.log(data);	
// });


//task2
// function calcArrProduct(arr){
// return new Promise((resolve, reject) => {
//     if (arr.filter(item => typeof item === 'number')){
//     resolve(arr.reduce((acc, rec) => acc * rec));
//     }else(
//         reject("Error! Incorrect array!")
//     )
// })
// }

// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

// task 3 

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// function showNumbers() {
// 	// your code with using delay(i, time)
// }
