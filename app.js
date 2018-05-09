/* import globals */
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const rowElement = document.getElementById('first-row');

for(var i = 0; i < cookieData.length; i++){
    // console.log(object[i]);
    console.log('here is my message');
    var newTd = cookieData[i].createTd();
    console.log('here is newTd', newTd);
    rowElement.appendChild(newTd);
}


//createRow(firstBatch);
console.log(firstBatch);