// script.js
// Implement the Chunky Monkey Algorithm

function chunkArrayInGroups(arr, size) {
    const newArray = [];
    let index = 0;

    while (index < arr.length) {
        newArray.push(arr.slice(index, index + size));
        index += size;
    }
    return newArray;
}
