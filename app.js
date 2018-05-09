/* globals donutList */
/* exported app */

'use strict';

var template = document.querySelector('#donut-row');
var td = template.content.querySelectorAll('td');
td[0].textContent = 'test0';
td[1].textContent = 'test1';

class App {
    constructor(donuts) {
        this.donuts = donuts;
    }

    render() {
        let tableRow = document.createElement('tr');
        for(let i in donutList) {
            td[i].textContent = donutList[i].name;
            tableRow.appendChild(td);
        }
        return tableRow;
    }
}