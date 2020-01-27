// #### 1. Addition

// - Write a function `add` that uses a closure that performs addition on arguments in two separate function calls.

// ```javascript
// add(3)(4);
// // returns 7
// ```
console.log('1. Addition');


function add(a) {
    return function (b) {
        return a + b;
    };
}
console.log(add(3)(4));
console.log(add(10)(5));


// #### 2. Multiply

// - Write a function `multiplier` that uses a closure to perform multiplication. 
// However, the outer function should be stored in a variable which is then called.

console.log('2. Multiply');

const multiplier = function (c) {
    return function (d) {
        return c * d;
    };
};
console.log(multiplier(6)(5));


// #### 3. Calculate Money Saved till Pension Day!

// Write a function that accepts several parameters and calculates the number of money that will have been saved as 
// pension until a person retires. The function should be self invoked and should have the following parameters:

// - The current age of the person // e.g. 40
// - The retirement age of the person // e.g. 60 
// - The monthly wage the person earns // e.g. 1000
// - The percentage (as integer) that the person saves each month // e.g. 10%

// If the person has already retired then the message 'You're already retired!' should be printed.
// If not, then the program should calculate how many years remain until the person retires, the monthly income
//  and take a specific percent of this income every month as saved money.

// - Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. 
// How much money will she have saved until she retires?
// - Output: $30000


console.log('3. Calculate Money Saved till Pension Day!');


(function moneySaver(currentAge, retirementAge, incomes, percentage) { 
    let sumTimeLeft = retirementAge - currentAge;
    let moneyEarned = (sumTimeLeft * 12) * incomes;
    let moneySaved = 0;
    if (currentAge>= 65) {
        return console.log('You\'re already retired!');
    } else {
        moneySaved = moneyEarned*percentage;
        return console.log('You will save ' + moneySaved + '€');
    }
})(40, 65, 2000, 0.05);

