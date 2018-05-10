/* globals coffeeList */
'use strict';

// declaring two functions to insert a table header and footer for my coffee menu
function header() {
    const coffeeTable = document.querySelector('#table-header');
    let tableHeader = document.createElement('th');
    coffeeTable.appendChild(tableHeader);
    tableHeader.setAttribute('colspan', '5');
    tableHeader.textContent = 'Coffee Menu';
}

function footer() {
    const coffeeTable = document.querySelector('#table-footer');
    let tableFooter = document.createElement('td');
    tableFooter.id = 'footer';
    coffeeTable.appendChild(tableFooter);
    tableFooter.setAttribute('colspan', '5');
    tableFooter.textContent = 'Don\'t procrastinate - procaffeinate!';
}

header();
footer();

// populating <body> tag in HTML with data from my array coffeeList
let menuTemplate = document.querySelector('#coffee-menu');
let td = menuTemplate.content.querySelectorAll('td');
let tb = document.querySelector('tbody');

for(let j = 0; j < coffeeList.length; j++) {
  
    td[0].textContent = coffeeList[j].name.toUpperCase();
    td[1].textContent = coffeeList[j].temp;
    td[2].textContent = coffeeList[j].size;
    td[3].textContent = coffeeList[j].price;
    td[4].textContent = coffeeList[j].calories;
    
    let clone = document.importNode(menuTemplate.content, true);
    tb.appendChild(clone);
}


