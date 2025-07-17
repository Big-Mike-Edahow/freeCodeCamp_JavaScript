// script.js
// Build an Inventory Management Program

const inventory = [];

function findProductIndex(prodName) {
    let lowCaseName = prodName.toLowerCase();
    return inventory.findIndex((obj) => obj['name'] === lowCaseName);
}

function addProduct(obj) {
    let prodIndex = findProductIndex(obj['name']);
    let lowCaseName = obj['name'].toLowerCase();
    obj['name'] = lowCaseName;
    if (prodIndex === -1) {
        inventory.push(obj);
        console.log(lowCaseName + " added to inventory");
    } else {
        inventory[prodIndex]['quantity'] = inventory[prodIndex]['quantity'] + obj['quantity'];
        console.log(lowCaseName + " quantity updated");
    }
}

function removeProduct(prodName, quantity) {
    let lowCaseName = prodName.toLowerCase();
    let obj = { name: lowCaseName, quantity: quantity };
    let prodIndex = findProductIndex(obj['name']);
    if (prodIndex === -1) {
        console.log(lowCaseName + " not found");
    } else if (prodIndex !== -1 && inventory[prodIndex]['quantity'] > quantity) {
        inventory[prodIndex]['quantity'] = inventory[prodIndex]['quantity'] - obj['quantity'];
        console.log("Remaining " + lowCaseName + " pieces: " + inventory[prodIndex]['quantity']);

    } else if (prodIndex !== -1 && inventory[prodIndex]['quantity'] == quantity) {
        inventory.splice(prodIndex, 1);

    } else if (prodIndex !== -1 && inventory[prodIndex]['quantity'] < quantity) {
        console.log("Not enough " + lowCaseName + " available, remaining pieces: " + inventory[prodIndex]['quantity'])
    }
}
