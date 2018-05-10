'use strict';
/* exported Batch, batch1, batch2, batch3, batch4, batch5, tableArray, createTableData, createRows*/

class Batch {
    constructor(batch, salmonType, size, inventory, cost, batchPrice, unitPrice) {
        this.batch = batch,
        this.salmonType = salmonType,
        this.size = size,
        this.inventory = inventory,
        this.cost = cost,
        this.batchPrice = batchPrice,
        this.unitPrice = unitPrice;
    }

    sell() {
        return this.inventory--;
    }

    bake(count) {
        return this.inventory + count;
    }

    profit() {
        return this.price - this.cost;
    }

}


let batch1 = new Batch (1, 'Pacific', 'M', 8, 10, 20, 2.5);
console.log ('batch1', batch1);

let batch2 = new Batch (2, 'Atlantic', 'S', 12, 10, 20, 2.0);
console.log ('batch2', batch2);

let batch3 = new Batch (3, 'Pacific', 'M', 8, 10, 20, 2.5);
console.log ('batch3', batch3);

let batch4 = new Batch (4, 'Pacific', 'S', 12, 10, 20, 2.0);
console.log ('batch4', batch4);

const batchArray = [batch1, batch2, batch3, batch4];
console.log(batchArray, 'batchArray');


for(let i = 0; i < batchArray.length; i++) {
    var parent = document.getElementById('t-body');
    var child = document.createElement('tr');
    parent.appendChild(child);
    child.id = i;
    console.log('this works');
    insertBatch(i);

}

function insertBatch (i) {
    child = document.getElementById(i);
    var grandChild = document.createElement('td');
    grandChild.textContent = batchArray[i].batch;
    child.appendChild(grandChild);
}



// var getData = document.querySelector('#table-data');
// getData.appendChild(tableData);
// console.log('this works');
// for(let i = 0; i < batchArray.length; i++) {
//     var tableData = document.createElement('td');
//     tableData.textContent = batchArray[i].batch;

// }