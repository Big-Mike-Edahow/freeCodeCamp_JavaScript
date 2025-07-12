// script.js

// Determine if year is a leap year. 
function isLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return (year + " is a leap year.");
    } else return (year + " is not a leap year.");
}
const year = 2025;
let result = isLeapYear(year);

// Output the result of the isLeapYear function call.
console.log(result);
