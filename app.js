function renderCookies() {
    var parent = document.getElementById('cookie-table');
    for(var i = 0; i < batchList.length; i++) {
        var child = document.createElement('tr');
        child.id = 'row-' + i;
        parent.appendChild(child);

        insertCost(i);
    }
}
renderCookies();

function insertCost(i) {
    var parent = document.getElementById('row-' + i);
    var child = document.createElement('td');
    parent.appendChild(child);
    child.textContent = batchList[i].cost;
}


