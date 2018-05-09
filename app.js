/* globals Fruit */

let apple = new Fruit('Apple', 'red', 'sweet', 'round', 5);
let banana = new Fruit('Banana', 'yellow', 'sweet', 'skinny', 7);
let lime = new Fruit('Lime', 'green', 'sour', 'oval', 2);
let strawberry = new Fruit('Strawberry', 'red', 'sweet', 'conical', 15);
let blueberry = new Fruit('Blueberry', 'blue', 'tart', 'round', 29);

let fruitArray = [apple, banana, lime, strawberry, blueberry];

for(let i = 0; i < fruitArray.length; i++) {
    let fruitTable = document.getElementById('table-body');
    let fruitRow = document.createElement('tr');

    fruitRow.setAttribute('id', 'body-row-' + i);
    fruitTable.appendChild(fruitRow);

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
}