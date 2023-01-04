// task1функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника 
// height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
//  якщо функції передано не числові параметри.

// function calcRectangleArea( ){
// let height = +prompt("Please enter your value for height");
// let width =  +prompt("Please enter your value for width");
// let S = 1/2 * height * width;
// if (isNaN(height)){
//     throw new Error("your value for height is not a number");
// }
// else if (isNaN(width)){
// throw new Error("your value for width is not a number");
// }
// return S;
// }
// try{
//     let result = calcRectangleArea();
//    console.log(result);
// } catch(exception){
//    console.log(exception.message);
// }


//  task2   
// Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 

// function checkAge(){
//     let age = +prompt("Please enter your age");
//     if (age == ''){
//         throw new Error("The field is empty! Please enter your age");
//     }
// else if (isNaN(age))
// throw new Error("your value is not a number");

// else if (age < 14)
// throw new Error("you too young");
// }

// try{
//     checkAge();
// } catch(exception){
//    console.log(exception.message);
// }
//task 3 функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця
//  відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з 
//  /повідомленням 'Incorrect month number'.
// class MonthException{
//     constructor(message){
//         this.message = message;
//         this.name = "MonthException";
//     }
// }

// function showMonthName(month){
// month = +prompt("Please enter your number");
// if (month== 1){
// alert ("January");
// }
// else if (month== 2){
// alert ("February");
// }
// else if (month== 3){
// alert ("March");
// }
// else if (month== 4){
// alert ("April");
// }
// else if (month== 5){
// alert ("May");
// }
// else if (month== 6){
// alert ("June");
// }
// else if (month== 7){
// alert ("July");
// }
// else if (month== 8){
// alert ("August");
// }
// else if (month== 9){
// alert ("September");
// }
// else if (month== 10){
// alert ("October");
// }
// else if (month== 11){
// alert ("November");
// }
// else if (month== 12){
// }
// else if (month > 12){
// throw new MonthException("Incorrect month number");       
// }
// }

// try{
//     let result = showMonthName();
//     console.log(result);
// } catch(exception){
//    console.log(exception.message);
// }
// task 4
// а) Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку 
// у разі якщо введено від’ємне id.

//  b) Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids
//  на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// а)
// function showUser(){
//     this.id = +prompt("Please enter your value");
//     if (this.id < 0){
//         throw new Error("your value for id is negative");
//     }
// else if (this.id >0){
//     return this.id;
// }
// }
// try{
//     let result = showUser();
//    console.log(result);
// } catch(exception){
//    console.log(exception.message);
// }
// b)
