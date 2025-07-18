// script.js
// Build a Book Organizer

const books = [{
    "title": "Pawn of Prophecy",
    "authorName": "David Eddings",
    "releaseYear": 1982
}, {
    "title": "The Sword of Shannara",
    "authorName": "Terry Brooks",
    "releaseYear": 1977
}, {
    "title": "Comstock Lode",
    "authorName": "Louis L'Amour",
    "releaseYear": 1981
}, {
    "title": "The Pelican Brief",
    "authorName": "John Grisham",
    "releaseYear": 1992
}, {
    "title": "The Summer House",
    "authorName": "James Patterson",
    "releaseYear": 2020
}];

function sortByYear(book1, book2) {
    return (book1.releaseYear < book2.releaseYear) ? -1 :
        (book1.releaseYear > book2.releaseYear) ? 1 : 0;
}

const filteredBooks = books.filter((book) => book.releaseYear > 1982);

const sortedFilteredBooks = filteredBooks.sort(sortByYear);
