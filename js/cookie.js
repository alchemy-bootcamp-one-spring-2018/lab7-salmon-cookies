'use strict';

class Batch {
    constructor(batch, salmonType, size, cost, price){
        this.batch = batch;
        this.salmonType = salmonType;
        this.size = size;
        this.cost = cost;
        this.price = price; 
    }
}

let batch1 = new Batch(1, "pacific", "M", 10.00, 20.00);
console.log('batch1' , batch1);

let batch2 = new Batch(2, "Alaskan", "S", 20.00, 40.00);
console.log('batch2', batch2);

let batch3 = new Batch(3, "Atlantic", "L", 20.00, 40.00);
console.log('batch2', batch2);

let batch4 = new Batch(4, "Oregon", "S", 20.00, 60.00);
console.log('batch2', batch2);

var allTheCookies = [
    batch1, batch2, batch3, batch4
];

