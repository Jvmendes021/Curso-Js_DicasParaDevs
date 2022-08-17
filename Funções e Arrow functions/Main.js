function sum(a, b = 10) {
    return a + b;
}

//const sumArrow = (a, b =10) => {
//    return a + b;
//};


// Mesma coisa que o de cima 
const sumArrow = (a, b =10) => a + b;


const sumValue = sum(2)

console.log(sumValue);