class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //getFullname() {
    //    console.log(`${this.firstName} + ${this.lastName}`);
    //}

    static spek() {
        console.log("Hello World!");
    }
}

const person = new Person("Jane" , "Done" , 40);

console.log(person);

Person.spek();

class Animal {
    constructor(name) {
        this.name = name
    }
    spek(){
        console.log(`${this.name} made some noise!`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    
    spek(){
        console.log(`Dog ${this.name} barked!`);
    }

}


const animal = new Animal('Simba');
const dog = new Dog("Bob")

animal.spek();
dog.spek();