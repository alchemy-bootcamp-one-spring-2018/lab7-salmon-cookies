'use strict';
/* globals Store */
/* exported sell, profit, render, totals */

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
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);

        cell0.textContent = this.location;
        cell1.textContent = this.salmonType;
        cell2.textContent = this.size;
        cell3.textContent = '$' + this.cost;
        cell4.textContent = '$' + this.price;
        cell5.textContent = this.inventory;

        return tbody;
    }
}