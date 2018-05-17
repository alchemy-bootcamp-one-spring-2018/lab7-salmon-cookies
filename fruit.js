/*  */
/*  */
'use strict';

// Constructor function → create fruit instances → array of objects → loop through array

//constructor function - Fruit class
class Fruit {
    constructor(name, color, standLocation, price, createTableHead, renderApple) {
        this.name = name;
        this.color = color;
        this.standLocation = standLocation;
        this.price = price;
    }

    this.createTableHead = function() {
        const table = document.querySelector('#fruit-table');
        const thead = document.createElement('thead');
        console.log(table, thead);

        const tr = document.createElement('tr');
        var headerRow = ['', 'Name', 'Color', 'Stand Location', 'Price'];
        for(var i = 0; i < 5; i++) {
            let th = document.createElement('th');
            th.textContent = headerRow[i];
            table.appendChild(thead);
            thead.appendChild(tr);
            tr.appendChild(th);
        }
    };

    // //render fruit rows
    // renderApple() {
    //     const table = document.querySelector('#fruit-table');
    //     const tbody = document.createElement('tbody');

    //     const tr = document.createElement('tr');
    //     for(var i in apple) {
    //         let td = document.createElement('td');
    //         td.textContent = apple[i];
    //         table.appendChild(tbody);
    //         tbody.appendChild(tr);
    //         tr.appendChild(td);
    //     }
    // };

    // renderOrange(fruits) {
    //     const table = document.querySelector('#fruit-table');
    //     const tbody = document.createElement('tbody');

    //     const tr = document.createElement('tr');
    //     for(var apple in fruits) {
    //         let th = document.createElement('th');
    //         th.textContent = fruits[apple];
    //         table.appendChild(tbody);
    //         tbody.appendChild(tr);
    //         tr.appendChild(th);
    //     }
    // }

    // renderAvocado() {
    //     const table = document.querySelector('#fruit-table');
    //     const tbody = document.createElement('tbody');

    //     const tr = document.createElement('tr');
    //     avocado[this.name];
    //     for(var i = 0; i < 5; i++) {
    //         let th = document.createElement('th');
    //         th.textContent = avocado[i];
    //         table.appendChild(tbody);
    //         tbody.appendChild(tr);
    //         tr.appendChild(th);
    //     }
    // }

    // createTableFooter() {
    //     const table = document.querySelector('#fruit-table');
    //     const tfoot = document.createElement('tfoot');
    //     console.log(table, tfoot);

    //     const tr = document.createElement('tr');
    //     var footerRow = ['Total:', '3 Names', '3 Colors', '3 Stand Locations', 'Total Price'];
    //     for(var i = 0; i < 5; i++) {
    //         let th = document.createElement('th');
    //         th.textContent = footerRow[i];
    //         table.appendChild(tfoot);
    //         tfoot.appendChild(tr);
    //         tr.appendChild(th);
    //     }
    // }
}

//instances of fruit object
var apple = new Fruit('Granny Smith', 'green', 'Portland', 3);
console.log('apple object');
createTableHead();
// apple.renderApple(apple);
var orange = new Fruit('Navel', 'orange', 'Eugene', 2);
var avocado = new Fruit('Hass', 'green', 'Corvallis', 4);

//array of fruits
//loop through fruits --> in app.js
var fruits = [apple, orange, avocado]; //use for creating tr in table body?
// console.log(fruits);


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

// function createTablesHead(Fruit) {
//     //make a js reference to the parent element (table > thead > tr > table cell)
//     const table = document.getElementById('fruit-table');
//     const thead = document.createElement('thead');

//     //tr > line x
//     let tr = [];
//     for(var i = 0; i < 2; i++) {
//         tr[i] = document.createElement('tr');

//         //create the child element we want to add and save as a var
//         //cells > line y
        
//         let th = document.createElement('th');
//         //give child content (content can be text)
//         let cellText = document.createTextNode(Text);
//         th.appendChild(Text);
//         //append child to the parent
//         tr.appendChild(tr);    
//         //append child to the parent tr > thead
//         thead.appendChild(tr[i]);
//     }
//     //append child to the parent thead > table
//     table.appendChild(thead);
// }

/* test createTableHead function */
// createTableHead() {
//     console.log('sell');
//     const table = document.querySelector('#fruit-table');
//     const thead = document.createElement('thead');
//     console.log(table, thead);

//     const tr = document.createElement('tr');
//     const th = document.createElement('th');
//     th.textContent = apple.name;
//     table.appendChild(thead);
//     thead.appendChild(tr);
//     tr.appendChild(th);
// }
