

// const user = {
//     name: "Ryan",  //Properties
//     lastname: "mcmillan",
//     age:30,
//     showFullName(){
//         return this.name + " "+ this.lastname;
//     }
// }

// console.log(user.showFullName());

// const account = {
//     number: "2345678934567",
//     amount:100,
//     deposit(monto){
//        return this.amount += monto;
//     },
//     withdraw(monti){
//         this.amount -= monti;
//     }
// }

// account.deposit(200);
// account.withdraw(100)
// account.deposit(200);
// console.log(account)


// Contructor function

// const user1 = {
//     name: "Ryan",
//     lastname: "mcmillan",
//     age:30,
//     showFullName(){
//         return `${this.name} + " "+ ${this.lastname}`;
//     }
// }

// // Contructor
// function Person(){
//     this.name = "",
//     this.lastname = "",
//     this.age = 0,
//     this.showFullName = function(){
//         return `${this.name} ${this.lastname}`;
//     }
// }

// const user2 = new Person();
// user2.name = "Jose";
// user2.lastname = "Perez";
// user2.age = 30;
// console.log(user2.showFullName());

// const user3 = new Person();
// user3.name = "Maria";
// user3.lastname = "Gomez";
// const user4 = new Person();
// user4.name = "Pedro";
// user4.lastname = "Perez";
// const user5 = new Person();
// user5.name = "Juan";
// user5.lastname = "Gomez";

// console.log(user3.showFullName());
// console.log(user4.showFullName());
// console.log(user5.showFullName());


// Contructores de Javascript

// const person = new Object();
// console.log(person)

// const person2 = {};
// console.log(person2.constructor === Object);

// const string = new Object("Hellow word");
// string.name = "Special string"
// string.test = function (){
//     return this + "test";
// }
// console.log(string.test());


// const user = {
//     name: "Ryan",
//     lastname: "Ray",
//     age: 30,
//     showName(){
//         return this.name;
//     }
// }

// console.log(Object.values(user));


// function Person(){
//     this.name = "",
//     this.lastname = ""
// }

// const person = new Person ();
// console.log(person);

// function Person () {
//     "use strict";
//     this.name = '';
//     this.lastname = '';
// }

// const mankind = {
//     Person: function (){
//         "use strict";
//         this.name = '';
//         this.lastname = '';
//     }
// }

// const person2 = new mankind.Person();


// function Person(name, lastname){
//     this.name = name,
//     this.lastname = lastname;
//     this.displayName = function(){
//         return `${this.name}  ${this.lastname}`;
//     }
// }

// const john = new Person("Jhon", "mcmillan");
// john.name = "Jon";

// const maria = new Person("Maria", "Perez");
// const joe = new Person("Jose", "Perez Leon");


// Person.prototype.greet = function(){
//     return `Hello I am ${this.name}`;
// }

// Person.prototype.age = 100;

// console.log(john);
// console.log(maria.greet());
// console.log(joe.age);


// const s = new String("Hello world");

// String.prototype.concatTest = function(){
//     return this + "test";
// }

// console.log("My name is Alan".concatTest())
// console.log(s);

// Clases

// function Person(){
//     this.name = ''
//     this.lastname = ''
// }

// const company = {
//     name : "fazt tech",
//     employees:[],
// }

// const Person = class{
//     constructor(name, lastname){
//         this.name = name;
//         this.lastname = lastname;
//     }

    // greet(){
    //     return `Hello I'm ${this.name} ${this.lastname}`;
    // }
// }

// const john = new Person("John", "mcmillan");
// const maria = new Person("Maria", "Perez");

// company.employees.push(john)
// company.employees.push(maria)

// Relacion
// maria.parent = john;

// console.log(maria);
// console.log(company);


// Composicion
const persona = {
    name: 'ryan',
    lastname: 'ray',
    address:{
        street: '123 baker street',
        city: 'london',
        country: 'Unites Kingdom'
    }
}

// const company = {
//     name : "fazt tech",
//     employees:[],
//     sortEmployees : function(){
//     }
// }

function Company (name){
    let employees = [];
    this.name = name


    this.getEmplyes = function(){
        return employees;
    }

    this.addEmployee = function(employee){
        employees.push(employee);
    }
}

const company = new Company("coca cola");
const company2 = new Company("Pepsi");

company.addEmployee({name : "ryan"})
company2.addEmployee({name : "joe"})

console.log(company.getEmplyes());
console.log(company2.getEmplyes());