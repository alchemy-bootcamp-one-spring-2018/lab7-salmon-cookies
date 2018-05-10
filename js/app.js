'use strict';
/* globals Store arrHeaders */


function createHeader() {
    var table = document.getElementsByTagName('table')[0];
    var thead = document.createElement('thead');
    table.appendChild(thead);
    //document.getElementsByTagName('thead')[0].textContent = 'This is some text';

    for(var i = 0; i < arrHeaders.length; i++) {
    
    }

    //var tHeadInput = document.getElementsByTagName('thead');
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
createBody();
createFooter();