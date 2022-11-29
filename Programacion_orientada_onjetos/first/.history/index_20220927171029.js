

const user = {
    name: "Joe",  //Properties
    lastname: "mcmillan",
    age:30,
    showFullName(){
        console.log(this.showFullName())
        return "Ryan Tay";
    }
}

console.log(user.showFullName());