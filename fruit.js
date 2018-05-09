/*  */
/*  */
'use strict';

/* <table>
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Color</th>
                <th scope="col">standLocation</th>
                <th scope="col">Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table> */

// let fruits = [
//     {
//         fruitImg: 'images/1.png',
//         fruitName: 'Oranges',
//         fruitPrice: '$2',
//         fruitColor: 'orange',
//     },
//     {
//         fruitImg: 'images/2.png',
//         fruitName: 'Bananas',
//         fruitPrice: '$1',
//         fruitColor: 'yellow',
//     },
//     {
//         fruitImg: 'images/3.png',
//         fruitName: 'Strawberries',
//         fruitPrice: '$2',
//         fruitColor: 'red',
//     }
// ];

// Constructor function → create fruit instances → array of objects → loop through array

//constructor fruit function
function Fruit (name, color, standLocation, price) {
    this.name;
    this.color;
    this.standLocation = standLocation;
    this.price;
}

//instances of fruit object
var apple = new Fruit('Granny Smith', 'green', 'Portland', 3);
var orange = new Fruit('Navel', 'orange', 'Eugene', 2);
var avocado = new Fruit('Hass', 'green', 'Corvallis', 4);

//array of fruits
//loop through fruits --> in app.js
var fruits = ['apple', 'orange', 'avocado']; //use for creating tr in table body?
console.log(fruits.length);

//function to push to thead
// function createLi(fruits) {
//     //make a js reference to the parent element
//     const ul = document.getElementById('fruits-list');
//     //create the child element we want to add and save as a var
//     let li = document.createElement('li');
//     //give child content (content can be text)
//     li.textContent = fruits.fruitName + ' are ' + fruits.fruitPrice;
//     li.style.color = fruits.fruitColor;
//     //append child to the parent
//     ul.appendChild(li);
// }

function createTableHead(Fruit) {
    //make a js reference to the parent element (table > thead > tr > table cell)
    const tbl = document.getElementById('fruit-table');
    const tblHead = document.createElement('thead');
    const tblRow = document.createElement('tr');
    //tr > line x

    //create the child element we want to add and save as a var
    //cells > line y
    let tblCell = document.createElement('th');
    //give child content (content can be text)
    tblCell.textContent = Fruit.name;
    //append child to the parent
}

//function to push to tbody
//function to push to tfooter