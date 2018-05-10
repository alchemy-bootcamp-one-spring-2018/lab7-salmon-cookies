// class object
class Batch {
// constructor method
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
        
        // append child (td) to (table row)
        var tableRow = document.createElement('tr');
        newTable.appendChild(tableRow);
    
        // append batch to row
        var tableRowBatch = document.createElement('td');
        tableRow.appendChild(tableRowBatch);
        tableRowBatch.textContent = this.batch;
        
        // append salmonType to row
        var tableRowType = document.createElement('td');
        tableRow.appendChild(tableRowType);
        tableRowType.textContent = this.salmonType;
    
        // append size to row
        var tableRowSize = document.createElement('td');
        tableRow.appendChild(tableRowSize);
        tableRowSize.textContent = this.size;

        // append inventory to row
        var tableRowInventory = document.createElement('td');
        tableRow.appendChild(tableRowInventory);
        tableRowInventory.textContent = this.inventory;

        // append cost to row
        var tableRowCost = document.createElement('td');
        tableRow.appendChild(tableRowCost);
        tableRowCost.textContent = this.cost;

        // append retailPrice to row
        var tableRowRetailPrice = document.createElement('td');
        tableRow.appendChild(tableRowRetailPrice);
        tableRowRetailPrice.textContent = this.retailPrice;

    }
}

// create new instance of Batch and call attributes
let batch1 = new Batch(1, 'Atlantic', 'Medium', 30, '$15', '$30');
batch1.createTable();

let batch2 = new Batch(2, 'Pacific', 'Large', 15, '$20', '$45');
batch2.createTable();

let batch3 = new Batch(3, 'Pacific', 'Small', 40, '$30', '$50');
batch3.createTable();














// for batch1 (i = 0, i < Batch.length, i++) {
//     var newTr(i) = getElementByTag("tr")

// }

console.log('batch1', batch1);