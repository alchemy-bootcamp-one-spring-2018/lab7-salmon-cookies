/* globals donutList */
/* exported App */

'use strict';



const template = document.querySelector('#donut-row');
const td = template.content.querySelectorAll('td');
const tbody = document.querySelector('tbody');

for(let i in donutList) {
    td[0].textContent = donutList[i].name;
    td[1].textContent = donutList[i].available ? '✅' : '❌';
    td[2].textContent = donutList[i].cost;
    td[3].textContent = donutList[i].inventory;
    var clone = document.importNode(template.content, true);
    tbody.appendChild(clone);
}

// var clone = document.importNode(template.content, true);
// tbody.appendChild(clone);

// class App {
//     constructor(donuts) {
//         this.donuts = donuts;
//     }

//     render() {
//         const tableRow = document.createElement('tr');

//         for(let i in this.donuts) {
//             var clone = document.importNode(template.content, true);
//             td[i].textContent = donutList[i].name;
//             tbody.appendChild(clone);
//         }
        
//         return tbody;
//     }
// }

// const first = new App(donutList);

// first.render();