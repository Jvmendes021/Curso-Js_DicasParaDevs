const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map(function(number) {
    return number * 2
});


const ages = [8, 39, 18, 40, 22, 39];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0
})

//console.log(evenAges);
//console.log(numbersMultipliedByTwo);

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 21);

console.log(sumOfAges);