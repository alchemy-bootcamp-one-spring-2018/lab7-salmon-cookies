/* globals donutList */
/* exported App */

'use strict';

var template = document.querySelector('#donut-row');
var td = template.content.querySelectorAll('td');

var tbody = document.querySelector('tbody');
// td[0].textContent = 'name';
// td[1].textContent = 'seasonal';
// td[2].textContent = '20';
// td[3].textContent = '90';

// var tb = document.querySelector('tbody');
// var clone = document.importNode(t.content, true);
// tb.appendChild(clone);

class App {
    constructor(donuts) {
        this.donuts = donuts;
    }

    render() {
        const tableRow = document.createElement('tr');

        for(let i in this.donuts) {
            var clone = document.importNode(template.content, true);
            td[i].textContent = donutList[i].name;
            tbody.appendChild(clone);
        }
        
        return tbody;
    }
}

const first = new App(donutList);

first.render();