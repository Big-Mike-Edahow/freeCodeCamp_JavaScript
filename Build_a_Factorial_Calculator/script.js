// script.js
// Build a Factorial Calculator

let num = 4

function factorialCalculator(num) {
    if (num < 0) {
        return "There is no factorial for negative numbers.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

let factorial = factorialCalculator(num)
let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg);
