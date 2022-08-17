const names = ["Felipe", "João", "Bia", 10, false];

const joão = names[1]

names.push("Pedro");
names.unshift("Fernada");

names.pop();
names.pop();
names.pop();


names[3] = "Gustavo"; 

const indexOffFelipe = (names.indexOf('Felipe'));

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names)

console.log(names.length);
console.log(sortedNames);
console.log(namesIsArray);
