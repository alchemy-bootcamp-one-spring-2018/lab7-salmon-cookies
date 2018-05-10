/* globals addNumber, addStoreName, addBoxesOrdered, addUnitsSold, addProfits, newStores */
'use strict';

//create table body
for(let i = 0; i < newStores.length; i++) {
    var parent = document.getElementById('table-body');
    var child = document.createElement('tr');
    parent.appendChild(child);
    child.id = i;
    addNumber(i);
    addStoreName (i);
    addBoxesOrdered (i);
    addUnitsSold (i);
    addProfits (i);
}
//create table head
const headTitles = ['Store Number', 'Store Name', 'Boxes Ordered', 'Units Sold', 'Profits'];
var headParent = document.getElementById('table-head');
var headChild = document.createElement('tr');
headParent.appendChild(headChild);

for(let j = 0; j < headTitles.length; j++) {
    child = document.getElementById('table-head');
    var newTh = document.createElement('th');
    newTh.textContent = headTitles[j];
    child.appendChild(newTh);
}