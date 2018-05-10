class Batch {

    constructor(batch, salmonType, size, inventory, cost, retailPrice) {
        this.batch = batch;
        this.salmonType = salmonType;
        this.size = size;
        this.inventory = inventory;
        this.cost = cost;
        this.retailPrice = retailPrice;
    }
    createTable() {
        // create coolie table to append in html
        var newTable = document.getElementById('cookie-table');

        // append batch to row
        var tableRowBatch = document.createElement('td');
        newTable.appendChild(tableRowBatch);
        tableRowBatch.textContent = this.batch;
        
        // append salmonType to row
        var tableRowType = document.createElement('td');
        newTable.appendChild(tableRowType);
        tableRowType.textContent = this.salmonType;
    
        // append size to row
        var tableRowSize = document.createElement('td');
        newTable.appendChild(tableRowSize);
        tableRowSize.textContent = this.size;

        // append inventory to row
        var tableRowInventory = document.createElement('td');
        newTable.appendChild(tableRowInventory);
        tableRowInventory.textContent = this.inventory;

        // append cost to row
        var tableRowCost = document.createElement('td');
        newTable.appendChild(tableRowCost);
        tableRowCost.textContent = this.cost;

        // append retailPrice to row
        var tableRowRetailPrice = document.createElement('td');
        newTable.appendChild(tableRowRetailPrice);
        tableRowRetailPrice.textContent = this.retailPrice;

    }
}

let batch1 = new Batch(1, 'Atlantic', 'medium', 30, '$15', '$30');

batch1.createTable();














// for batch1 (i = 0, i < Batch.length, i++) {
//     var newTr(i) = getElementByTag("tr")

// }

console.log('batch1', batch1);