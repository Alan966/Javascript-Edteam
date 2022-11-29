

const user = {
    name: "Ryan",  //Properties
    lastname: "mcmillan",
    age:30,
    showFullName(){
        return this.name + " "+ this.lastname;
    }
}

console.log(user.showFullName());

const account = {
    number: "2345678934567",
    amount:100,
    deposit(monto){
       return this.amount += monto;
    }
}