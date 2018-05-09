/* exported cookie, Cookie, Batch */

function cookie(fishType, price, cost) {
    this.fishType = fishType;
    this.price = price;
    this.cost = cost;
}

class Cookie {
    constructor(fishType, price, cost) {
        this.fishType = fishType;
        this.price = price;
        this.cost = cost;
    }
}

class Batch {
    constructor(batch, salmonType, cookieSize, cost, price, inventory) {
        this.batch = batch;
        this.salmonType = salmonType;
        this.cookieSize = cookieSize;
        this.cost = cost;
        this.price = price;
        this.inventory = inventory;
    }

    sell() {
        return this.inventory--;
    }

    profit() {
        return this.price - this.cost;
    }
}

let biscuits = new Batch('1', 'Atlantic', 'L', 5, 20, 12);
biscuits.sell();
biscuits.price = 43;
console.log(biscuits);