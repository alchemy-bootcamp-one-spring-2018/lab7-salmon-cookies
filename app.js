/* globals donutList */
/* exported App */

'use strict';

function createHeader(name) {
    const parent = document.querySelector('#donut-header>tr');
    const child = document.createElement('th');
    child.textContent = name;
    parent.appendChild(child);
}

function createFooter(name) {
    const parent = document.querySelector('#donut-footer>tr');
    const child = document.createElement('td');
    child.textContent = name;
    parent.appendChild(child);
}
class App {
    constructor(donuts) {
        this.donuts = donuts;
    }

    render() {
        const header = document.querySelector('#donut-header');
        const headerRow = document.createElement('tr');
        header.appendChild(headerRow);
        createHeader('');
        createHeader('Name');
        createHeader('Available');
        createHeader('Calories');
        createHeader('Cost');
        createHeader('Inventory');
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

        const footer = document.querySelector('#donut-footer');
        // const footerRow = 
    }
}
