// script.js
// Implement the Slice and Splice Algorithm

function frankenSplice(array1, array2, index) {
    let newArray2 = [...array2];
    let i = 0;
    for (i = 0; i < array1.length; i++) {
        newArray2.splice(index + i, 0, array1[i]);
    }
    return newArray2;
}
