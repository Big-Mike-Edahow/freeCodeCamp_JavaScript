// script.js

window.onload = function () {
    document.getElementById("text-input").value = "";
};

let textInput = document.getElementById("text-input");
let charCount = document.getElementById("char-count");
const maxChars = 50;

textInput.addEventListener("input", () => {
    let inputChars = textInput.value.length;

    charCount.textContent = ("Character Count: " + inputChars + "/" + maxChars);

    if (inputChars >= maxChars) {
        charCount.style.color = "red";
        textInput.value = textInput.value.substring(0, maxChars);
    } else {
        charCount.style.color = "black";
    }
});
