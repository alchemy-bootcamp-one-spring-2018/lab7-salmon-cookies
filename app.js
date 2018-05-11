var displayArray = [];

class Batch {

    constructor(batch, flavor, ounces, retailPrice, cookiesSold) {
        this.batch = batch;
        this.flavor = flavor;
        this.ounces = ounces;
        this.retailPrice = retailPrice;
        this.cookiesSold = cookiesSold;

    }
}

let batch1 = new Batch(1, 'Dijon', '3oz', 6.99, 62);
let batch2 = new Batch(2, 'Garlic Butter', '3.5oz', 7.99, 121);
let batch3 = new Batch(3, 'Orange Glazed', '4oz', 5.99, 79);
console.log('batch1', batch1);
console.log('retailPrice', batch1.retailPrice);

function addRow(cookie) {
    const tBody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.textContent = cookie;
    tBody.appendChild(tr);
    
}

//test to get something to page--needs to get broken into separate tds
addRow(batch1.batch + batch1.flavor + batch1.ounces);

// function addTableData(cookie) {
//     const tBody = document.getElementById('tbody');
//     const td = document.createElement('td');
//     td.textContent = cookie;
//     tBody.appendChild(td);

// }
//addTableData(batch2.batch);