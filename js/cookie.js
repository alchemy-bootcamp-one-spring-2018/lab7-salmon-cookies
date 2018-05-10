'use strict';

class Batch {
    constructor(batch, salmonType, size, inventory, cost, price){
        this.batch = batch;
        this.salmonType = salmonType;
        this.size = size;
        this.inventory = inventory;
        this.cost = cost;
        this.price = price; 
    }
    sell() {
        return this.inventory--;
    }

    profit(){
        return this.price - this.cost;
    }
}

let batch1 = new Batch(1,"pacific", "M", 20, 10.00, 20.00);
console.log('batch1' , batch1);

let batch2 = new Batch(2, "Alaskan", "S", 40, 20.00, 40.00);
console.log('batch2', batch2);

var allTheCookies = [
    batch1, batch2
],