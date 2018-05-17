/* globals storeList createHeader createFooter */

createHeader();

// keep totals for each day
let totalFriday = 0;
let totalSaturday = 0;
let totalSunday = 0;

// write elements in storeList to table
const tableBodyElement = document.getElementById('store-list');
for(let i = 0; i < storeList.length; i++) {
    storeList[i].render(tableBodyElement);
    totalFriday += storeList[i].boxesFriday;
    totalSaturday += storeList[i].boxesSaturday;
    totalSunday += storeList[i].boxesSunday;
}

// write totals to footer
createFooter(totalFriday, totalSaturday, totalSunday);

// write weekend total
let totalEl = document.getElementById('weekend-total');
totalEl.innerHTML = (totalFriday + totalSaturday + totalSunday);


