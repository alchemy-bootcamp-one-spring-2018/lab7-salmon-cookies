/* globals cookieData*/
// console.log(firstBatch.sold(2));
// console.log(firstBatch.profitMargin());

const enderElement = document.getElementById('main-table');
const rowElement = document.getElementById('table-body');

function generateHeader(){
    var makeHeader = headerInfo[0].createThead();
    var attachToTable = headerInfo[0].createTEle('th');
    makeHeader.appendChild(attachToTable);
    enderElement.appendChild(makeHeader);
}
generateHeader();

function generateFooter(){
    var makeFooter = footerInfo[0].createTfoot();
    var attachToTable = footerInfo[0].createTEle('th');
    makeFooter.appendChild(attachToTable);
    enderElement.appendChild(makeFooter);
}

generateFooter();
var sum = 0;
function addColumn(){
    var additionArray = [];
    for(var i = 0; i < cookieData.length; i++){
        let sumOfColumns = cookieData[i].inventory;
        additionArray.push(sumOfColumns);
    }
    sum = additionArray.reduce(function(acc, value){
        return acc + value;
    }, 0);
    console.log(sum);
}

addColumn();

for(var i = 0; i < cookieData.length; i++){

    var newTr = cookieData[i].createTEle('td');
    newTr.setAttribute('id', 'row-' + i);
    rowElement.appendChild(newTr);
}

console.log(cookieData[0].inventory);