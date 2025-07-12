// script.js

function maskEmail(email) {
    let atSign = email.indexOf("@");
    let asterisk = atSign - 2;
    return `${email.slice(0, 1)}${"*".repeat(asterisk)}${email.at(atSign - 1)}${email.slice(atSign)}`;
}

let email = "mike@foobar.com";

// Log the result of maskEmail to the console.
console.log(maskEmail(email));
