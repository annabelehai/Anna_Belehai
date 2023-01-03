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
