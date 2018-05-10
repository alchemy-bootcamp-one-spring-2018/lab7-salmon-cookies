/* globals allLocations */

console.log('app.js is loading');

var t = document.querySelector('#header-row');
var td = t.content.querySelectorAll("td");

// Function to create table header

var createHeaderRow = function(){
    td[0].textContent = '';
    td[1].textContent = allLocations[0].hours[0];
    td[2].textContent = allLocations[0].hours[1];
    td[3].textContent = allLocations[0].hours[2];
    td[4].textContent = allLocations[0].hours[3];
    td[5].textContent = allLocations[0].hours[4];
    td[6].textContent = allLocations[0].hours[5];
    td[7].textContent = allLocations[0].hours[6];
    td[8].textContent = allLocations[0].hours[7];
    td[9].textContent = allLocations[0].hours[8];
 
    // Clone the new row and insert it into the table
    var tb = document.querySelector("thead");
    var clone = document.importNode(t.content, true);
    tb.appendChild(clone);
  
};

// Function to create table footer

t = document.querySelector('#footer-row');
td = t.content.querySelectorAll("td");

var createFooterRow = function(){
    td[0].textContent = '';
    td[1].textContent = salesByLocation1000;
    td[2].textContent = salesByLocation1100;
    td[3].textContent = 'need calc';
    td[4].textContent = 'need calc';
    td[5].textContent = 'need calc';
    td[6].textContent = 'need calc';
    td[7].textContent = 'need calc';
    td[8].textContent = 'need calc';
    td[9].textContent = 'need calc';

    // Clone the new row and insert it into the table
    var tf = document.querySelector("tfoot");
    var clone2 = document.importNode(t.content, true);
    tf.appendChild(clone2);

};

// Function to create table rows for body

t = document.querySelector('#body-rows');
td = t.content.querySelectorAll("td");

var createLocationRows = function(){
    for(i = 0; i < allLocations.length; i++) {
        td[0].textContent = allLocations[i].location;
        td[1].textContent = allLocations[i].salesPerHour1000;
        td[2].textContent = allLocations[i].salesPerHour1100;
        td[3].textContent = allLocations[i].salesPerHour1200;
        td[4].textContent = allLocations[i].salesPerHour1300;
        td[5].textContent = allLocations[i].salesPerHour1400;
        td[6].textContent = allLocations[i].salesPerHour1500;
        td[7].textContent = allLocations[i].salesPerHour1600;
        td[8].textContent = allLocations[i].salesPerHour1700;
        td[9].textContent = allLocations[i].salesPerHour1800;

        // Clone the new row and insert it into the table
        tb = document.querySelector("tbody");
        clone = document.importNode(t.content, true);
        tb.appendChild(clone);

    }
};

// Function to total up columns - sales across all locations

let salesByLocation1000 = 0;
let salesByLocation1100 = 0;

let allLocationsSales = function(){
    for(allSales = 0; allSales < allLocations.length; allSales++)
        salesByLocation1000 += allLocations[allSales].salesPerHour1000; 
        
};




console.log('this is the second item in the hours array - should be 11:00: ' + allLocations[0].location[1]);

console.log('all location sales value (10:00) is: ' + allLocations[1].salesPerHour1000);

// Function calls (to all above) to render complete table


createHeaderRow();
createLocationRows();
allLocationsSales();
createFooterRow();

console.log(salesByLocation1000);


