/* import globals */
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const headerElement = document.getElementById('main-table');
const rowElement = document.getElementById('table-body');

function generateHeader(){
    var makeHeader = headerInfo[0].createTh();
    var attachToHeader = headerInfo[0].createTr();
    makeHeader.appendChild(attachToHeader);
    headerElement.appendChild(makeHeader);
}
generateHeader();

for(var i = 0; i < cookieData.length; i++){

var newTr = cookieData[i].createTr();
newTr.setAttribute("id", "row-" + i);
rowElement.appendChild(newTr);
}
