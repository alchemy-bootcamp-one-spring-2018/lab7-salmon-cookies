/* globals coffeeList */
'use strict';

// inserting table headers using the name of each coffee item
/*
for(let i = 0; i < coffeeList.length; i++) {
    const coffeeTable = document.querySelector('#table-header');
    const tableHeaders = document.createElement('th');
    coffeeTable.appendChild(tableHeaders);
    tableHeaders.textContent = coffeeList[i].name.toUpperCase();
} */

// populating <body> tag in HTML with data from my array coffeeList
let menuTemplate = document.querySelector('#coffee-menu');
let td = menuTemplate.content.querySelectorAll('td');
let tb = document.querySelector('tbody');

for(let j = 0; j < coffeeList.length; j++) {
  
    td[0].textContent = coffeeList[j].name;
    td[1].textContent = coffeeList[j].temp;
    td[2].textContent = coffeeList[j].size;
    td[3].textContent = coffeeList[j].price;
    td[4].textContent = coffeeList[j].calories;
    
    let clone = document.importNode(menuTemplate.content, true);
    tb.appendChild(clone);
}
/*
const tableRow = document.querySelector('#menu-info');
const tableData = document.createElement('td');
tableRow.appendChild(tableData);
tableData.id = 'td-' + j.toString(); */

