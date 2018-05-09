class Batch {

    constructor(batch, flavor, ounces, retailPrice) {
        this.batch = batch;
        this.flavor = flavor;
        this.ounces = ounces;
        this.retailPrice = retailPrice;

    }
}

let batch1 = new Batch(1, 'Dijon', '3oz', 6.99);
let batch2 = new Batch(2, 'Garlic Butter', '3.5oz', 7.99);
let batch3 = new Batch(3, 'Orange Glazed', '4oz', 5.99);
console.log('batch1', batch1);
console.log('retailPrice', batch1.retailPrice);

function addRow(cookie) {
    const tBody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tr.textContent = cookie;
    tBody.appendChild(tr);
}
addRow(batch1.batch);