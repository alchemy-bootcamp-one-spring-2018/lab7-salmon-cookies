/* exported cookieData */

class Batch {

    constructor(number, salmonType, inventory, price, cost, cookieSize) {
        this.number = number;
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

    createTEle(element){
        const row = document.createElement('tr');
        
        const firstData = document.createElement(element);
        firstData.textContent = this.batch;
        row.appendChild(firstData);

        const secondData = document.createElement(element);
        secondData.textContent = this.salmonType;
        row.appendChild(secondData);

        const thirdData = document.createElement(element);
        thirdData.textContent = this.inventory;
        row.appendChild(thirdData);

        const fourthData = document.createElement(element);
        fourthData.textContent = this.price;
        row.appendChild(fourthData);

        const fifthData = document.createElement(element);
        fifthData.textContent = this.cost;
        row.appendChild(fifthData);

        const sixthData = document.createElement(element);
        sixthData.textContent = this.cookieSize;
        row.appendChild(sixthData);

        return row;
    }

}

const headerInfo = [
    head = new Batch('Batch', 'Type', 'Inventory', 'Price', 'Cost', 'Size')
];

const footerInfo = [
    foot = new Batch('', '', '', 'being', 'implemented', '')
];


let firstBatch = new Batch('1', 'Pacific', 24, 20.00, 7.50, 'Small');
let secondBatch = new Batch('2', 'Atlantic', 10, 25.00, 8.50, 'Medium');
let thirdBatch = new Batch('3', 'Pacific', 7, 30.00, 9.25, 'Large');
let fourthBatch = new Batch('4', 'Pacific', 45, 35.00, 10.00, 'Small');

const cookieData = [firstBatch, secondBatch, thirdBatch, fourthBatch];