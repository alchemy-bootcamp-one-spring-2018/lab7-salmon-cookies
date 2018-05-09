/* globals Fruit */

let grannyApple = new Fruit('Granny Smith Apple', 'green', 'tart');
let banana = new Fruit('Banana', 'yellow', 'sweet');

let fruitArray = [grannyApple, banana];
let bodyRowId = 0;

let fruitTable = document.createElement('tr');
fruitTable.setAttribute('id', bodyRowId);

for(let i in fruitArray) {

    let nameCell = document.createElement('td');
    nameCell.textContent = fruitArray[i].name;
    fruitTable.appendChild(nameCell);
    let colorCell = document.createElement('td');
    colorCell.textContent = fruitArray[i].color;
    fruitTable.appendChild(colorCell);
    let flavorCell = document.createElement('td');
    flavorCell.textContent = fruitArray[i].flavor;
    fruitTable.appendChild(flavorCell);

    bodyRowId++;
}