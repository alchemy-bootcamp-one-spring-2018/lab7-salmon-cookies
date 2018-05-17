/* exported storeList createHeader createFooter*/

// generic function to create a table row and append to parentElement.  Used by class and functions below.
function addTableRow(columnValueArray, parentElement) {
    var newRow = document.createElement('tr');
    for(var i = 0; i < columnValueArray.length; i++) {
        var newCell = document.createElement('td');
        newCell.innerHTML = columnValueArray[i];
        newRow.appendChild(newCell);
    }
    parentElement.appendChild(newRow);
}

function createHeader() {
    const parentElement = document.getElementById ('table-header');
    const columnValueArray = ['Store Name', 'Friday Sales', 'Saturday Sales', 'Sunday Sales'];
    addTableRow(columnValueArray, parentElement);
}

function createFooter(totalFriday, totalSaturday, totalSunday) {
    const parentElement = document.getElementById ('table-footer');
    const columnValueArray = ['TOTALS', totalFriday, totalSaturday, totalSunday];
    addTableRow(columnValueArray, parentElement);
}

// gets a random integer between 0 and 60.  Used to create dummy data (number of boxes sold).
//adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(60));
}

class Store {
    constructor(storeName, boxesFriday, boxesSaturday, boxesSunday) {
        this.storeName = storeName;
        this.boxesFriday = boxesFriday;
        this.boxesSaturday = boxesSaturday;
        this.boxesSunday = boxesSunday;
    }

    render(parentElement) {
        const columnValueArray = [this.storeName, this.boxesFriday, this.boxesSaturday, this.boxesSunday];
        addTableRow(columnValueArray, parentElement);
    }
}
  
const storeList = [
    new Store ('Fred Meyer', getRandomInt(), getRandomInt(), getRandomInt()),
    new Store ('Walgreen', getRandomInt(), getRandomInt(), getRandomInt()),
    new Store ('Home Depot', getRandomInt(), getRandomInt(), getRandomInt()),
    new Store ('QFC', getRandomInt(), getRandomInt(), getRandomInt()),
    new Store ('New Seasons', getRandomInt(), getRandomInt(), getRandomInt()),
    new Store ('Costco', getRandomInt(), getRandomInt(), getRandomInt())
];
