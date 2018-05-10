/* globals donutList */
/* exported App */

'use strict';
function createHeader(name) {
    const 
}
class App {
    constructor(donuts) {
        this.donuts = donuts;
    }

    render() {
        const header = document.querySelector('#donut-header');
        const headerRow = document.createElement('tr');
        header.appendChild(headerRow);
        crearteHeader('Name')

        const template = document.querySelector('#donut-row');
        const td = template.content.querySelectorAll('td');
        const tbody = document.querySelector('tbody');

        for(let i in donutList) {
            td[0].textContent = '';
            td[1].textContent = donutList[i].name;
            td[2].textContent = donutList[i].available ? '✅' : '❌';
            td[3].textContent = donutList[i].calories;
            td[4].textContent = '$' + donutList[i].cost;
            td[5].textContent = donutList[i].inventory;
            const clone = document.importNode(template.content, true);
            tbody.appendChild(clone);
        }
    }
}
