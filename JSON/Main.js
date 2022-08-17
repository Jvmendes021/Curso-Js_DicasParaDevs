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

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

console.log(todosList);