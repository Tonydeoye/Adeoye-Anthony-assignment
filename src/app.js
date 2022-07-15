const assignment = require('./assignment.js');

const { sumofNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumofNumbers && typeof sumofNumbers === 'function'){
    console.log(sumofNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}