/* import globals */
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const enderElement = document.getElementById('main-table');
const rowElement = document.getElementById('table-body');

function generateHeader(){
    var makeHeader = headerInfo[0].createThead();
    var attachToTable = headerInfo[0].createTh();
    makeHeader.appendChild(attachToTable);
    enderElement.appendChild(makeHeader);
}
generateHeader();

function generateFooter(){
    var makeFooter = footerInfo[0].createTfoot();
    var attachToTable = footerInfo[0].createTh();
    makeFooter.appendChild(attachToTable);
    enderElement.appendChild(makeFooter);
}
generateFooter();



for(var i = 0; i < cookieData.length; i++){

    var newTr = cookieData[i].createTr();
    newTr.setAttribute('id', 'row-' + i);
    rowElement.appendChild(newTr);
}
