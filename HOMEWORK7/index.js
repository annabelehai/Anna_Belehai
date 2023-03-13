// task 1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [firstArr, secondArr, thirddArr] = arr;
console.log(firstArr); // "Tom"
console.log(secondArr); // "Sam"
console.log(thirddArr); // [Bob]

// task 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
 };​

 
 let /* Ваш код */ = data;

 console.log(name2); // "Tom"
 console.log(age2); // 24
 console.log(name4); // "Bob"
 console.log(age4); // 26
 
//Task#3: Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
console.log("Task#3");

function mul(...rest) {
   let result = 1;
   let isNumber = false;
   for (let i of rest) {
      if (typeof i == "number") {
         result *= i;
         isNumber = true;
      }
   }
   return isNumber ? result : 0;
 }

 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 

//Task#4: Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().

console.log("Task#4");

let server = {
    data: 0,
    convertToString: function (callback) {
       callback(() => {
          return this.data + "";
       });
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (callback => {
          this.result = callback();
       });
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"

 
//Task#5: Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. 
//Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, 
//а значеннями Map - значення з другого масиву.
//Після цього функція повертає даний об'єкт Map.

console.log("Task#5");

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
function mapBuilder(keys, values) {
   const map = new Map();
   for (let i of keys) {
      map.set(i, values[i - 1]);
   }
   return map;
}


console.log(map.size); // 4
	console.log(map.get(2)); // "span"
 