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

var createFooterRow = function(){
    td[0].textContent = '';
    td[1].textContent = 'OK';
    td[2].textContent = 'OK2';
    td[3].textContent = 'OK3';
    td[4].textContent = allLocations[0].hours[3];
    td[5].textContent = allLocations[0].hours[4];
    td[6].textContent = allLocations[0].hours[5];
    td[7].textContent = allLocations[0].hours[6];
    td[8].textContent = allLocations[0].hours[7];
    td[9].textContent = allLocations[0].hours[8];

    // Clone the new row and insert it into the table
    var tf = document.querySelector("tfoot");
    var clone = document.importNode(t.content, true);
    tf.appendChild(clone);

};

// Function to total up columns - sales across all locations

let salesByLocation = 0;

let allLocationsSales = function(){
    for(j = 1; j < allLocations.length; j++)
        salesByLocation += allLocations[j].salesPerHour1000; 
};


console.log('this is the second item in the hours array - should be 11:00: ' + allLocations[0].hours[1]);

console.log('all location sales value (10:00) is: ' + salesByLocation[1]);

// Loop to create table rows from object array

// Function calls (to all above) to render complete table
allLocationsSales();
createHeaderRow();
createFooterRow();
