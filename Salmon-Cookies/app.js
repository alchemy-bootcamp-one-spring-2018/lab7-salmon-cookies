class Batch{

    constructor(batch, cost, price, profit, size, inventory, glipGlop){

        this.batch = batch;
        this.cost = cost;
        this.price = price;
        this.profit = profit;
        this.size = size;
        this.inventory = inventory;
        this.glipGlop = glipGlop;
        
    }

    sell() {
        return this.inventory;
    }

    profit() {
        return this.price - this.cost;
    }
}

let batch1 = new Batch(1, '$200', '$4', '$30,000', 'Big', 10, 'Of Course');

console.log('batch1', batch1);

console.log('hey');