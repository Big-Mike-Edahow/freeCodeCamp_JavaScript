// script.js
// Implement the Mutations Algorithm

function mutation(arr) {
    const firstString = arr[0].toLowerCase();
    const secondString = arr[1].toLowerCase();

    let i;
    for (i = 0; i < secondString.length; i++) {
        const char = secondString[i];
        if (!firstString.includes(char)) {
            return false;
        }
    }
    return true;
} 
