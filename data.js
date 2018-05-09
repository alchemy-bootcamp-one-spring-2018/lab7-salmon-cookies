/* exported cookieData */

class Batch {

    constructor(batch, salmonType, inventory, price, cost, cookieSize) {
        this.batch = batch;
        this.salmonType = salmonType;
        this.inventory = inventory;
        this.price = price;
        this.cost = cost;
        this.cookieSize = cookieSize;
    }

    sold(i){
        return this.inventory - i;
    }

    profitMargin() {
        return this.price - this.cost;
    }

    createTd(){
        const row = document.createElement('tr');

        const firstData = document.createElement('td');
        firstData.textContent = this.batch;
        row.appendChild(firstData);

        const secondData = document.createElement('td');
        secondData.textContent = this.salmonType;
        row.appendChild(secondData);

        const thirdData = document.createElement('td');
        thirdData.textContent = this.inventory;
        row.appendChild(thirdData);

        return row;
    }
}

const cookieData = [
    firstBatch = new Batch('1', 'Pacific', 24, 20.00, 7.50, 'Small'),
    secondBatch = new Batch('2', 'Atlantic', 10, 25.00, 8.50, 'Medium'),
    thirdBatch = new Batch('3', 'Pacific', 7, 30.00, 9.25, 'Large')
];