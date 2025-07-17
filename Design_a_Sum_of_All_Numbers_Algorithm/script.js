// script.js
// Design a Sum All Numbers Algorithm

function sumAll(arr) {
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    let sumOfRange = 0;
    let i = 0;
    for (i = minVal; i <= maxVal; i++) {
        sumOfRange += i;
    }
    return sumOfRange;
}
