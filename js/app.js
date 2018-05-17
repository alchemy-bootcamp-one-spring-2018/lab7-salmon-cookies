'use strict';

//instantiate the existing table
var t = document.querySelector('#batch-row'),
td = t.content.querySelectorAll('td');


for (let i = 0; i < allTheCookies.length; i++) {
    td[0].textContent = allTheCookies[i].batch;
    td[1].textContent = allTheCookies[i].salmonType;
    td[2].textContent = allTheCookies[i].size;
    td[3].textContent = allTheCookies[i].cost;
    td[4].textContent = allTheCookies[i].price;
    
    //clone the new row and display it in the table
    var tb = document.querySelector("tbody");
    var clone = document.importNode(t.content, true);
    tb.appendChild(clone);
}    


   

