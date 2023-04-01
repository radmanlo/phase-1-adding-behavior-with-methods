// Your code here

class Dog{

    // constructor
    constructor (name, sex){
        this.name = name
        this.sex = sex
    }

    // speak function
    speak(){
        return `${this.name} says woof!`
    }
}

class Cat{

    // constructor
    constructor (name, sex){
        this.name = name
        this.sex = sex
    }

    // speak function
    speak(){
        return `${this.name} says meow!`
    }
}

class Bird{

    // constructor
    constructor (name, sex){
        this.name = name
        this.sex = sex
    }

    // speak function
    speak(){
        if (this.sex === "male")
            return `It\'s me! ${this.name}, the parrot!`
        return `${this.name} says squawk!`
    }
}