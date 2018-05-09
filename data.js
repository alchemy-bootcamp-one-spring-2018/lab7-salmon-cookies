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

    createThead(){
        const head = document.createElement('thead');
        return head;
    }

    createTfoot(){
        const foot = document.createElement('tfoot');
        return foot;
    }

    createTh(){
        const row = document.createElement('tr');

        const firstData = document.createElement('th');
        firstData.textContent = this.batch;
        row.appendChild(firstData);

        const secondData = document.createElement('th');
        secondData.textContent = this.salmonType;
        row.appendChild(secondData);

        const thirdData = document.createElement('th');
        thirdData.textContent = this.inventory;
        row.appendChild(thirdData);

        const fourthData = document.createElement('th');
        fourthData.textContent = this.price;
        row.appendChild(fourthData);

        const fifthData = document.createElement('th');
        fifthData.textContent = this.cost;
        row.appendChild(fifthData);

        const sixthData = document.createElement('th');
        sixthData.textContent = this.cookieSize;
        row.appendChild(sixthData);

        return row;
    }

    createTr(){
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

        const fourthData = document.createElement('td');
        fourthData.textContent = this.price;
        row.appendChild(fourthData);

        const fifthData = document.createElement('td');
        fifthData.textContent = this.cost;
        row.appendChild(fifthData);

        const sixthData = document.createElement('td');
        sixthData.textContent = this.cookieSize;
        row.appendChild(sixthData);

        return row;
    }
}
const headerInfo = [
    head = new Batch('Batch', 'Type', 'Inventory', 'Price', 'Cost', 'Size')
];

const footerInfo = [
    foot = new Batch('here', 'is', 'a', 'footer', 'to', 'test')
];

const cookieData = [
    firstBatch = new Batch('1', 'Pacific', 24, 20.00, 7.50, 'Small'),
    secondBatch = new Batch('2', 'Atlantic', 10, 25.00, 8.50, 'Medium'),
    thirdBatch = new Batch('3', 'Pacific', 7, 30.00, 9.25, 'Large'),
    fourthBatch = new Batch('4', 'Pacific', 45, 35.00, 10.00, 'Small')
];
