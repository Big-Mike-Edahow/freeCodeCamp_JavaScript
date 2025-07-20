// script.js

let thumbnails = document.querySelectorAll('.gallery-item');
let largeImage = document.getElementById('lightbox-image');
let lightbox = document.querySelector('.lightbox');
let closeButton = document.getElementById('close-btn');

for (const thumbnail of thumbnails) {
    thumbnail.addEventListener("click", function () {
        lightbox.style.display = "flex";
        largeImage.src = thumbnail.src.replace("-thumbnail", "");
    });
}

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
});
