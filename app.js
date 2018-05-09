/* globals storeList createHeader createFooter */

createHeader();

const tableBodyEl = document.getElementById('store-list');
let totalFriday = 0;
let totalSaturday = 0;
let totalSunday = 0;


for(let i = 0; i < storeList.length; i++) {
    let newRow = storeList[i].render();
    tableBodyEl.appendChild(newRow);
    totalFriday += storeList[i].boxesFriday;
    totalSaturday += storeList[i].boxesSaturday;
    totalSunday += storeList[i].boxesSunday;
}

createFooter(totalFriday, totalSaturday, totalSunday);


