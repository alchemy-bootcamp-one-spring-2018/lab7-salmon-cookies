'use strict';
/* globals Store */

var arrHeaders = [
    'Location',
    'Fish Origin',
    'Size (S/M/L)',
    'Cost',
    'Price',
    'Inventory'
];

var arrStores = new Array();
arrStores[0] = new Store('Portland', 'Pacific', 'M', 20, 10.00, 20.00);
arrStores[1] = new Store('New York', 'Atlantic', 'M', 10, 12.00, 24.00);
arrStores[2] = new Store('Los Angeles', 'Pacific', 'S', 30, 8.00, 18.00);
arrStores[3] = new Store('San Francisco', 'Pacific', 'L', 6, 15.00, 30.00);
arrStores[4] = new Store('Miami', 'Atlantic', 'S', 13, 4.00, 9.00);

// Sums costTotal, priceTotal, inventoryTotal for later use
var costTotal = 0;
var priceTotal = 0;
var inventoryTotal = 0;

for(var i = 0; i < arrStores.length; i++) {
    costTotal += arrStores[i].cost;
    priceTotal += arrStores[i].price;
    inventoryTotal += arrStores[i].inventory;
}

var arrFooters = [null, null, 'Total:', '$' + costTotal, '$' + priceTotal, inventoryTotal];


/*
Creates and appends 'thead', inserts one row there.
Remaining 'for' loop creates variables[i], inserts cells[i]
and modifies textContent to input header data from arrHeaders[i]
*/
function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);
    
    var row = thead.insertRow(0);
    var cell = [];
    for(var i = 0; i < arrHeaders.length; i++) {
        cell[i];
        cell[i] = row.insertCell(i);
        cell[i].textContent = arrHeaders[i];
    }
}

// Creates and appends 'tbody' then runs render();
// render() loops to create all table rows and table data
function createBody() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    
    for(var i = 0; i < arrStores.length; i++) {
        arrStores[i].render();
    }
}

// Function finds table, creates 'tfoot', 'tr', 'td' and appends
function createFooter() {
    var table = document.getElementsByTagName('table')[0];
    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var row = tfoot.insertRow(0);
    var cell = [];
    for(var i = 0; i < arrFooters.length; i++) {
        cell[i];
        cell[i] = row.insertCell(i);
        cell[i].textContent = arrFooters[i];
    }
}

// Call functions for header, body, and footer data
createHeader();
createBody();
createFooter();