/* exported addNumber, addStoreName, addBoxesOrdered, addUnitsSold, addProfits, newStores */
'use strict';

//constructor function
class Store {
    constructor(storeNumber, storeName, boxesOrdered, unitsSold, profits) {
        this.storeNumber = storeNumber;
        this.storeName = storeName;
        this.boxesOrdered = boxesOrdered;
        this.unitsSold = unitsSold;
        this.profits = profits;
    }
}
//new store array for constructor function
const newStores = [
    new Store ('1', 'Safeway', 100, 432, '$1,834.00'),
    new Store ('2', 'Corner Mart', 50, 134, '$698.00'),
    new Store ('3', 'Natural Grocers', 100, 563, '$2,486.00'),
    new Store ('4', 'New Seasons', 100, 356, '$1,275.00'),
    new Store ('5', '7 Eleven', 25, 43, '$220.00'),
    new Store ('6', 'Plaid Pantry', 25, 23, '$112.00'),
    new Store ('7', 'QFC', 50, 98, '$498.00'),
    new Store ('8', 'Whole Foods', 100, 256, '$989.00'),
];
//functions for table body loop to access (creating table data cells with array info)
function addNumber(i) {
    child = document.getElementById(i);
    var newTd = document.createElement('td');
    newTd.textContent = newStores[i].storeNumber;
    child.appendChild(newTd);
}

function addStoreName(i) {
    child = document.getElementById(i);
    var newTd = document.createElement('td');
    newTd.textContent = newStores[i].storeName;
    child.appendChild(newTd);
}

function addBoxesOrdered(i) {
    child = document.getElementById(i);
    var newTd = document.createElement('td');
    newTd.textContent = newStores[i].boxesOrdered;
    child.appendChild(newTd);
}

function addUnitsSold(i) {
    child = document.getElementById(i);
    var newTd = document.createElement('td');
    newTd.textContent = newStores[i].unitsSold;
    child.appendChild(newTd);
}

function addProfits(i) {
    child = document.getElementById(i);
    var newTd = document.createElement('td');
    newTd.textContent = newStores[i].profits;
    child.appendChild(newTd);
}


