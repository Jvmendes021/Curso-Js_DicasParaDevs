const person = {
    firstName: "João",
    lastName: "Mendes",
    age:"21",
    hobbies: ['Jogar', 'Estudar', 'Ler', 'Futebol'],
    dog: {
        name: "Simba",
        age: 4,
    },
};

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;


// Mesma coisa que acima, mais limpo.
const {firstName, lastName, age, hobbies, dog:{name:dogName}} = person 

const read = person.hobbies[3];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);

//Adicionar mais algum objeto.

//person.dog = 'Simba';

console.log(person.dog.age);
console.log(dogName);

//Lista Com vários objetos.

const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false
    },

    {
        id: 2,
        description: 'Ler',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Terinar',
        isCompleted: false,
    },
];

const descriptionOflastTodo = todos[2];

console.log(descriptionOflastTodo);

