

const user = {
    name: "Joe",  //Properties
    lastname: "mcmillan",
    age:30,
    showFullName(){
        console.log(this)
        return "Ryan Tay";
    }
}

console.log(user)
console.log(user.showFullName());