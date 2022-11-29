

const user = {
    name: "Joe",  //Properties
    lastname: "mcmillan",
    age:30,
    showFullName(){
        return this.name + " "+ this.lastname;
    }
}

console.log(user.showFullName());