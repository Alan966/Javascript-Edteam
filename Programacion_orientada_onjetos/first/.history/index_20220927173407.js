

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

const user1 = {
    name: "Ryan",
    lastname: "mcmillan",
    age:30,
    showFullName(){
        return `${this.name} + " "+ ${this.lastname}`;
    }
}

// Contructor
function Person(){
    this.name = "",
    this.lastname = "",
    this.age = 0,
    this.showFullName = function(){
        return `${this.name} ${this.lastname}`;
    }
}

const user2 = new Person();
user2.name = "Jose";
user2.lastname = "Perez";
user2.age = 30;
console.log(user2.showFullName());

const user3 = new Person();
const user4 = new Person();