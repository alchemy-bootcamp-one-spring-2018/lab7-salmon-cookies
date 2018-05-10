'use strict';
/* globals Store */

/*
Function create and appends 'thead', inserts one row there.
Remaining 'for' loop creates variables[i], inserts cells[i]
and modifies textContent to input header data from arrHeaders[i]
*/
function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);
    
    var thead = document.getElementsByTagName('thead')[0];
    var row = thead.insertRow(0);
    
    var cell = [];
    for(var i = 0; i < arrHeaders.length; i++) {
        cell[i];
        console.log();
        cell[i] = row.insertCell(i);
        cell[i].textContent = arrHeaders[i];
    }
}

// Function creates and appends 'tbody' then runs render()
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
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var tdText = document.createTextNode('Test Footer');

    td.appendChild(tdText);
    tr.appendChild(td);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);
}

createHeader();
createBody();
createFooter();