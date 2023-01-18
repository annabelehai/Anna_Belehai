// task 1 Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 

// function upperCase(str){
//     let regexp = /^[A-Z]/;
//     if (regexp.test(str)){
//         console.log("String's starts with uppercase character");
//     }else{ 
//         console.log("String starts with lowercase character");
//     }
// }

// upperCase('regexp');
// upperCase('RegExp');


// task2  Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.

// function checkEmail(str){
// let regexp = /[Qmail2@gmail.com]/;
// if (regexp.test(str)){
// console.log(regexp.test(str));;
// }
// }

// checkEmail("Qmail2@gmail.com");
// task 3 Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. 
// Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр

// let str = "cdbBdbsbz";
// console.log(str.match(/dB+d/gi)(d));

// task 4 Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.

// let str = "Java Script"
// newstr = str.replace(/(\w+)\s(\w+)/, '$2 $1');
// console.log(newstr);

// task 5 Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// function checkNumber(str){
// let regexp = /\d{4}\-\d{4}\-\d{4}\-\d{4}/
// console.log(regexp.test(str));
// if (regexp.test(str)){
//  console.log("Your card number is valid");
// }else{ 
//  console.log("Your card number is not valid");
// }
// }
// checkNumber("9999-9999-9999-9999");