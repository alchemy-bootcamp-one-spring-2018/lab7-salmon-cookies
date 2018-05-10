/* global batchList */

function renderCookies() {
    var parent = document.getElementById('cookie-table');
    for(var i = 0; i < batchList.length; i++) {
        var child = document.createElement('tr');
        child.id = 'row-' + i;
        parent.appendChild(child);

        insertChocolateChip(i);
        insertPrice(i);
        insertProfit(i);
    }
}
renderCookies();

function insertChocolateChip(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = batchList[i].ChocolateChip;
}


function insertPrice(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = batchList[i].price;
}

function insertProfit(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = batchList[i].profit;
}