// Task1 функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// }

// function propsCount(object){
//     return Object.keys(object).length
// }

// console.log(propsCount(mentor));

// Task2 функцію showProps(obj), яка приймає даний об’єкт і виводить список його властивостей записаних в масив. Виведіть також масив значень властивостей об’єкта.

// let Person = {
//     name: "Anna",
//     country: "Ukraine",
//     age: 24,
//     direction: "QC",
//     married: false,
// }
// function showProps(obj){

//     return (Object.keys(obj))
// }
// console.log(showProps(Person));
// console.log(Object.values(Person));

// task3 Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи. 
// class Person {​

// class Person {

//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() { return this.name + " " + this.surname; }

// }

// // ​Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
// // приймає параметр year (рік вступу до університету).
// class Student extends Person {
    
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     // В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
   
//     showFullName (middleName) { 
//         return super.showFullName() + " " + middleName;
// }

// // Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6).
// //  Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.

//     showCourse() {
//         const currentYear = 2023;
//         return currentYear - this.year;
//     }
// }

// const stud1 = new Student("Petro", "Petrenko", 2017);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 6

// ******************************************************task 4*****************************************

// const workerList = [];

// class Worker {
//     #experiance = 1.2;

//         constructor(fullName , dayRate, workingDays){
//             this.fullName  = fullName ;
//             this.dayRate = dayRate;
//             this. workingDays = workingDays;
//             workerList.push(this);
//         }
//             showSalary() { 
//     console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
// }  
// showSalaryWithExperience() { 
//     console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experiance}`); 
// }
// showSalaryWorker() {
//     return `${this.dayRate * this.workingDays * this.#experiance}`;
// }
// get showExp(){
//     return this.#experiance;
// }
// set setExp(experiance){
//     this.#experiance = experiance;
// }

// sortSalaries(workersArray){ 
//     let sortedSalaries = workersArray.sort(function(a,b){
//         return a.showSalaryWorker() - b.showSalaryWorker();
//     })
//     // console.log(sortedSalaries);
//     for (let i = 0; i < sortedSalaries.length; i++){
//         console.log(sortedSalaries[i].fullName + ":" + sortedSalaries[i].showSalaryWorker());
//     }
// }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// console.log("------------------")

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker1.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("------------------")

// let worker2 = new Worker("Andy Ander", 29, 23);
// console.log(worker1.fullName);                 
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// console.log("------------------")

// worker1.sortSalaries(workerList);

// *************************************task 5******************************

class GeometricFigure {
    getArea() {
return 0;
}
toString() {
     return Object.getPrototypeOf(this).constructor.name;
}
     }

class Triangle extends GeometricFigure {
    
        constructor(side1, height) {
            super();
            this.side1 = side1;
            this.height = height;
        }
        getArea() {
            return this.side1 * this.height / 2;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return Math.PI * this.r * this.r;
    }
}

