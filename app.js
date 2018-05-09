/* import globals */
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const rowElement = document.getElementById('table-body');


for(var i = 0; i < cookieData.length; i++){

    var newTr = cookieData[i].createTr();

    newTr.setAttribute("id", "row-" + i)

    rowElement.appendChild(newTr);
}

createTh();


//createRow(firstBatch);
console.log(firstBatch);