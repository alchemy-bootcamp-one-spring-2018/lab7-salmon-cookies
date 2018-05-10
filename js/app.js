'use strict';
/* globals Store arrHeaders */


function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);
    //document.getElementsByTagName('thead')[0].textContent = 'This is some text';
}

function getTitles() {
        var thead = document.getElementsByTagName('thead')[0];

        var row = thead.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.textContent = arrHeaders[0];
        cell2.textContent = arrHeaders[1];
        cell3.textContent = arrHeaders[2];
        cell4.textContent = arrHeaders[3];
        cell5.textContent = arrHeaders[4];
        cell6.textContent = arrHeaders[5];

        return thead;
}

function createBody() {
    var table = document.getElementsByTagName('table')[0];
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    //document.getElementsByTagName('tbody')[0].textContent = 'This is some text';
    for(var i = 0; i < arrStores.length; i++) {
        arrStores[i].render();
    }
}

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
getTitles();
createBody();
createFooter();