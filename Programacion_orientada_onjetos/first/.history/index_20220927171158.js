

const user = {
    name: "Ryan",  //Properties
    lastname: "mcmillan",
    age:30,
    showFullName(){
        return this.name + " "+ this.lastname;
    }
}

console.log(user.showFullName());