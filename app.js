/* exported Cookie chocolateCookie oatmealCookie bananaCookie */
/* globals cookieArray */
'use strict';

function insertRow() {
    var parent = document.getElementById('table-body');
    for(var i = 0; i < cookieArray.length; i++) {
        var child = document.createElement('tr');
        child.id = 'row-' + i;
        parent.appendChild(child);

        insertName(i);
        insertType(i);
        insertTaste(i);
        insertPrice(i);
        insertCost(i);
        insertInventory(i);
    }
}

insertRow();

function insertName(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].name;
}

function insertType(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].type;
}

function insertTaste(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].taste;
}

function insertPrice(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].price;
}

function insertCost(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].cost;
}

function insertInventory(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = cookieArray[i].inventory;
}

function insertFooter() {
    var parent = document.getElementById('table-footer');
    var child = document.createElement('tr');
    parent.appendChild(child);
    child.id = 'foot-row';
    footerData();
}

function footerData() {
    var parent = document.getElementById('foot-row');
    for(var i = 0; i < 6; i++) {
        var child = document.createElement('td');
        parent.appendChild(child);
    }
}

insertFooter();