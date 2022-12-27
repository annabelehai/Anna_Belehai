// task1
// За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.

// let arr1 = [2, 3, 4, 5 ];
// let number =1;

// for (let i = 0; i < arr1.length; i++) {
//     number *= arr1[i];
// }
// alert(number);

// let arr2 = [2, 3, 4, 5 ];
// let number1 = 1;
// let i = 0;
// while (i < arr2.length) {
//     number1 *= arr2[i];
//     console.log(number1);
// i++;​
// task2 JavaScript for цикл, який буде ітеруватися від 0 до 15. чи є поточне число парним чи непарним
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       alert([i] + " is odd");
//     }
//     else {
//       alert([i] + " is even");
//     }
// };

// }]
// task3 функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами діапазону 1-500.
// let k = [];
// let max = 500
// let min = 1

// for(let i = 0; i < length; i++){
// k.push(randomArray(min,max));
// }
// function randArray(min,max){
//     k.push (return Math.random() * (max - min) + min));
// }
//task4 функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b.

// function raiseToDegree(a, b) {
//     let result = a;
  
//     for (let i = 1; i < b; i++) {
//       result *= a;
//     }
  
//     return result;
//   }
  
//   let a = prompt("Enter your number", '');
//   let b = prompt("Enter degree for your number", '');
  
//   if (b < 1) {
//     alert(`Enter positive integer`);
//   } else {
//     alert( raiseToDegree(a, b) );
//   }
