// task1функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника 
// height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
//  якщо функції передано не числові параметри.


// function calcRectangleArea( ){
// let height = +prompt ("Enter your value for height");
// let width = +prompt("Enter your value for width");
// if (isNaN(height)){
//     throw new Error("your value for height is not a number");
// }
// else if (isNaN(width))
// throw new Error("your value for width is not a number")
// }



// try{
//     calcRectangleArea();
// } catch(exception){
//    console.log(exception.message);
// }

// console.log(calcRectangleArea);

//  S = 1/2 * width * height;
//  console.log(S);


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