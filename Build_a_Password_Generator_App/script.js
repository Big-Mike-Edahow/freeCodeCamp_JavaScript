// script.js
// Build a Password Generator App

function generatePassword(pWordLength) {
    let validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let generatedPWord = "";
    let i = 0;
    for (i = 1; i <= pWordLength; i++) {
        let ranIndex = Math.floor(Math.random() * validChars.length);
        generatedPWord += validChars[ranIndex];
    }
    return generatedPWord;
}

let password = generatePassword(8);
console.log("Generated password: " + password);
