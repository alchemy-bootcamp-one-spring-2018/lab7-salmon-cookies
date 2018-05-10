/* exported Cookie chocolateCookie oatmealCookie bananaCookie */
/* globals cookieArray */
'use strict';

function insertRow() {
    var parent = document.getElementById('cookie-table');
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


// function cookieHeader() {
//     var table = document.getElementById('cookie-table');
    
//     var thead = document.createElement('thead');
//     var tr = document.createElement('tr');
//     //var th = document.createElement('th');

//     for(var i = 0; i < 5; i++) {
//         var th = document.createElement('th');
//         tr.appendChild(th);
//         thead.appendChild(tr);
//         table.appendChild(thead);
//     }
//     //th.textContent = 'Type';
// }
// cookieHeader();

