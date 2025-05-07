class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayMyName(){
        return `Hello, My name is ${this.name} \n and i have ${this.age} year old`
    }
}

module.exports = {
    Person,
}