// script.js

const lunches = [];

function addLunchToEnd(lunches, menuItem) {
    lunches.push(menuItem);
    console.log(`${menuItem} added to the end of the lunch menu.`);
    return lunches;
}

function addLunchToStart(lunches, menuItem) {
    lunches.unshift(menuItem);
    console.log(`${menuItem} added to the start of the lunch menu.`);
    return lunches;
}

function removeLastLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.")
    } else {
        let menuItemRemoved = lunches.pop();
        console.log(`${menuItemRemoved} removed from the end of the lunch menu.`);
        return lunches;
    }
}

function removeFirstLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches to remove.")
    } else {
        let menuItemRemoved = lunches.shift();
        console.log(`${menuItemRemoved} removed from the start of the lunch menu.`);
        return lunches;
    }
}

function getRandomLunch(lunches) {
    if (lunches.length === 0) {
        console.log("No lunches available.")
    } else {
        let ranNumber = Math.floor(Math.random() * lunches.length);
        let ranElement = lunches[ranNumber];
        console.log(`Randomly selected lunch: ${ranElement}`);
    }
}

function showLunchMenu(lunches) {
    if (lunches.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log("Menu items: " + lunches.join(", "));
    }
}
