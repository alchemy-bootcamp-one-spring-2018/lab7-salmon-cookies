'use strict';


function createHeader() {
    var table = document.getElementsByTagName('table')[0];

    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var thText = document.createTextNode('Test Header');

    th.appendChild(thText);
    tr.appendChild(th)
    thead.appendChild(tr);
    table.appendChild(thead);
}

function createBody() {
    for(var i = 0; i < arrStores.length; i++) {
        var first = document.querySelector();

        var fruitName = fruits[i].createLi();
        first.appendChild(fruitName);
        first.style.color = fruits[3].color;

        var fruitImage = (fruits[i].createImg());
        first.appendChild(fruitImage);
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
createFooter();