'use strict';
/* globals Store */
/* exported sell, profit, render */

class Store {

    constructor(location, salmonType, size, inventory, cost, price) {
        this.location = location;
        this.salmonType = salmonType;
        this.size = size;
        this.inventory = inventory;
        this.cost = cost;
        this.price = price;
    }

    sell() {
        return this.inventory--;
    }

    profit() {
        return this.price - this.cost;
    }

    render() {
        var tbody = document.getElementsByTagName('tbody')[0];

        var row = tbody.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.textContent = this.location;
        cell2.textContent = this.salmonType;
        cell3.textContent = this.size;
        cell5.textContent = this.cost;
        cell6.textContent = this.price;
        cell4.textContent = this.inventory;

        return tbody;

    }
}

var arrStores = new Array()
arrStores[0] = new Store('Portland', 'Pacific', 'M', 20, 10.00, 20.00);
arrStores[1] = new Store('New York', 'Atlantic', 'M', 10, 12.00, 24.00);
arrStores[2] = new Store('Los Angeles', 'Pacific', 'S', 30, 8.00, 18.00);
arrStores[3] = new Store('San Francisco', 'Pacific', 'L', 6, 15.00, 30.00);
arrStores[4] = new Store('Miami', 'Atlantic', 'S', 13, 4.00, 9.00);


console.log('# of "Store" properties: ' + Store.length);
console.log('# of stores in array: ' + arrStores.length);