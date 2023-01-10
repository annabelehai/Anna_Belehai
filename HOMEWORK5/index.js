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

class Person {

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName() { return this.name + " " + this.surname; }

}

// ​Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
// приймає параметр year (рік вступу до університету).
class Student extends Person {
    
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    // В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
   
    showFullName (middleName) { 
        return super.showFullName() + " " + middleName;
}

// Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6).
//  Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВУЗу year.

    showCourse() {
        const currentYear = 2023;
        return currentYear - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 6


