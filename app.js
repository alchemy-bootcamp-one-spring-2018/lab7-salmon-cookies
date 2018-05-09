/* import globals */
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const rowElement = document.getElementById('main-table');

for(var i = 0; i < cookieData.length; i++){
    // console.log(object[i]);
    console.log('here is my message');
    var newTr = cookieData[i].createTd();
    console.log('here is newTd', newTr);
    rowElement.appendChild(newTr);
}


//createRow(firstBatch);
console.log(firstBatch);