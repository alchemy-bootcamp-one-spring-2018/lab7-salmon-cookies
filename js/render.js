function render(array, tabId, rowId) {
    let tab = document.getElementById(tabId);
    while(tab.firstChild) {
        tab.removeChild(tab.firstChild);
    }
    let row = document.createElement('tr');
    row.id = rowId;
    for(let i in array) {
        let data = document.createElement('td');
        data.innerHTML = array[i];
        row.appendChild(data);
    }
    // It doesn't work if I don't have this!??!
    setTimeout(() => {   
        tab.appendChild(row);
    }, 100);
}