console.log('app.js is loading');



// Function to create table header
console.log('this is the second item in the hours array - should be 11:00: ' + allLocations[0].hours[1]);

var t = document.querySelector('#header-row'),
  td = t.content.querySelectorAll("td");
  td[0].textContent = allLocations[0].hours[1];
  td[1].textContent = allLocations[0].hours[2];

  // Clone the new row and insert it into the table
  var tb = document.querySelector("thead");
  var clone = document.importNode(t.content, true);
  tb.appendChild(clone);

// Function to create table footer

// Function to total up columns - sales across all locations

let salesByLocation = 0;

let allLocationsSales = function(){
    for(i = 0; i < allLocations.length - 1; i++)
        salesByLocation += allLocations[i].salesPerHour1000; 
};

allLocationsSales();

console.log('this is the second item in the hours array - should be 11:00: ' + allLocations[0].hours[1]);

console.log('all location sales value (10:00) is: ' + salesByLocation);

// Loop to create table rows from object array

// Function calls (to all above) to render complete table