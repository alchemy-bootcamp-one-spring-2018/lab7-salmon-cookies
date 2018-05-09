/* exported storeList createHeader createFooter*/

// gets a random integer between 0 and 60.  Used to create dummy data (number of boxes sold).
//adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(60));
}

// generic function to create a table row.  Used by class and functions below.
function createTableRow(col1value, col2value, col3value, col4value) {
    var newRow = document.createElement('tr');
    var newCell1 = document.createElement('th');
    var newCell2 = document.createElement('td');
    var newCell3 = document.createElement('td');
    var newCell4 = document.createElement('td');
    newCell1.innerHTML = col1value;
    newCell2.innerHTML = col2value;
    newCell3.innerHTML = col3value;
    newCell4.innerHTML = col4value;
    // attach cells to row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);
    newRow.appendChild(newCell4);
    return newRow;
}

function createHeader() {
    const parentEl = document.getElementById ('table-header');
    const row = createTableRow('Store Name', 'Friday Sales', 'Saturday Sales', 'Sunday Sales');
    parentEl.appendChild(row);
}

function createFooter(totalFriday, totalSaturday, totalSunday) {
    const parentEl = document.getElementById ('table-footer');
    const row = createTableRow('TOTALS', totalFriday, totalSaturday, totalSunday);
    parentEl.appendChild(row);
}

class Store {
    constructor(storeName, boxesFriday, boxesSaturday, boxesSunday) {
        this.storeName = storeName;
        this.boxesFriday = boxesFriday;
        this.boxesSaturday = boxesSaturday;
        this.boxesSunday = boxesSunday;
    }

    render() {
        //create row and cell elements
        var newRow = createTableRow (this.storeName, this.boxesFriday, this.boxesSaturday, this.boxesSunday);
        return newRow;
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
