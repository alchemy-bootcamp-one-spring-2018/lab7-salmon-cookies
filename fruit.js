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
class Fruit {
    constructor(name, color, standLocation, price) {
        this.name = name;
        this.color = color;
        this.standLocation = standLocation;
        this.price = price;
    }

    createTableHead() {
        console.log('sell');
        const table = document.querySelector('#fruit-table');
        const thead = document.createElement('thead');
        console.log(table, thead);

        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = apple.name;
        table.appendChild(thead);
        thead.appendChild(tr);
        tr.appendChild(th);
    }
}

//instances of fruit object
var apple = new Fruit('Granny Smith', 'green', 'Portland', 3);
console.log(apple.createTableHead());
var orange = new Fruit('Navel', 'orange', 'Eugene', 2);
var avocado = new Fruit('Hass', 'green', 'Corvallis', 4);

//array of fruits
//loop through fruits --> in app.js
var fruits = [apple, orange, avocado]; //use for creating tr in table body?
console.log(fruits);

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

// function createTableHead(Fruit) {
//     //make a js reference to the parent element (table > thead > tr > table cell)
//     const table = document.getElementById('fruit-table');
//     const thead = document.createElement('thead');

//     //tr > line x
//     let tr = [];
//     for(var i = 0; i < 2; i++) {
//         tr[i] = document.createElement('tr');

//         //create the child element we want to add and save as a var
//         //cells > line y
//         let th = [];
//         for(var j = 0; j < 2; j++) {
//             th[j] = document.createElement('th');
//             //give child content (content can be text)
//             let cellText = document.createTextNode(fruits[j]);
//             th[j].appendChild(fruits[j]);
//             //append child to the parent
//             tr[i].appendChild(th[j]);
//         }
//         //append child to the parent tr > thead
//         thead.appendChild(tr[i]);
//     }
//     //append child to the parent thead > table
//     table.appendChild(thead);
// }

function createTablesHead(Fruit) {
    //make a js reference to the parent element (table > thead > tr > table cell)
    const table = document.getElementById('fruit-table');
    const thead = document.createElement('thead');

    //tr > line x
    let tr = [];
    for(var i = 0; i < 2; i++) {
        tr[i] = document.createElement('tr');

        //create the child element we want to add and save as a var
        //cells > line y
        
        let th = document.createElement('th');
        //give child content (content can be text)
        let cellText = document.createTextNode(Text);
        th.appendChild(Text);
        //append child to the parent
        tr.appendChild(tr);    
        //append child to the parent tr > thead
        thead.appendChild(tr[i]);
    }
    //append child to the parent thead > table
    table.appendChild(thead);
}

//function to push to tbody
//function to push to tfooter