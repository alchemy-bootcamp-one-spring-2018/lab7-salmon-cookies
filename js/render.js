function render(array, tabId, rowId) {
    let tab = document.getElementById(tabId);
    let row = document.createElement('tr');
    row.id = rowId;
    for(let i in array) {
        let data = document.createElement('td');
        data.innerHTML = array[i];
        row.appendChild(data);
    }
    tab.appendChild(row);
}