// script.js

const favIcons = document.querySelectorAll('.favorite-icon');

favIcons.forEach(function (favIcon) {
    favIcon.addEventListener("click", function () {
        this.classList.toggle('filled');
        this.classList.contains('filled') ? this.innerHTML = "&#10084;" : this.innerHTML = "&#9825;";
    });
});

