'use strict';
/* exported showData, tableArray*/

function createRows(){
    
    properties = [
        this.batch,
        this.salmonType,
        this.size,
        this.inventory,
        this.cost,
        this.batchPrice,
        this.unitPrice,
    ]

    var genRow = document.getElementById('table-data');
    var tr = document.createElement('tr');

    for(let i = 0; i < .length; i++) {
        var td = tableArray[i].createElement('td');

        genRow.appendChild(tr);
        tr.appendChild(td);

    }
}



//     function fruitShow(){
//         var fruit = document.getElementById('fruit-list');
//         console.log(fruit);
//         for(var i = 0; i < fruitStand.length; i++) {
//             var createListEle = fruitStand[i].createLi();
//             fruit.appendChild(createListEle);
//             var genImg = fruitStand[i].showImage();
//             fruit.appendChild(genImg);
// }



createRows();