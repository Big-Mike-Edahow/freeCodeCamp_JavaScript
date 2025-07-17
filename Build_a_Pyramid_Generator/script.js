// script.js
// Build a Pyramid Generator

function pyramid(pattern, numRows, status) {
    let pyBuilder = "";
    let i = 0;
    for (i = 1; i <= numRows; i++) {
        pyBuilder += "\n" + " ".repeat(numRows - i) + pattern.repeat(i * 2 - 1);
    }

    pyBuilder += "\n";

    if (status) {
        pyBuilder = pyBuilder.split("\n").reverse().join("\n");

    }
    return pyBuilder;
}
