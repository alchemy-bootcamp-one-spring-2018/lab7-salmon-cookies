/* globals Fruit */

let apple = new Fruit('apple', 'red', 'sweet', 'round', 5);
let banana = new Fruit('banana', 'yellow', 'sweet', 'skinny', 7);
let lime = new Fruit('lime', 'green', 'sour', 'oval', 2);
let strawberry = new Fruit('strawberry', 'red', 'sweet', 'conical', 15);
let blueberry = new Fruit('blueberry', 'blue', 'tart', 'round', 39);

let fruitArray = [apple, banana, lime, strawberry, blueberry];

let numberTotal = 0;
let total = document.getElementById('total-row');
let totalQuantity = document.createElement('td');

for(let i = 0; i < fruitArray.length; i++) {
    let tableBody = document.getElementById('table-body');

    let fruitRow = document.createElement('tr');

    fruitRow.setAttribute('id', 'body-row-' + i);
    tableBody.appendChild(fruitRow);

    let nameCell = document.createElement('td');
    nameCell.textContent = fruitArray[i].fruitName;
    fruitRow.appendChild(nameCell);

    let colorCell = document.createElement('td');
    colorCell.textContent = fruitArray[i].fruitColor;
    fruitRow.appendChild(colorCell);

    let flavorCell = document.createElement('td');
    flavorCell.textContent = fruitArray[i].fruitFlavor;
    fruitRow.appendChild(flavorCell);

    let shapeCell = document.createElement('td');
    shapeCell.textContent = fruitArray[i].fruitShape;
    fruitRow.appendChild(shapeCell);

    let quantityCell = document.createElement('td');
    quantityCell.textContent = fruitArray[i].fruitQuantity;
    fruitRow.appendChild(quantityCell);

    numberTotal += fruitArray[i].fruitQuantity;
}

totalQuantity.textContent = numberTotal;
total.appendChild(totalQuantity);