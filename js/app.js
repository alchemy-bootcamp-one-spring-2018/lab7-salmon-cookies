console.log('app.js is loading');



// Function to create table header

// Function to create table footer

// Function to total up columns - sales across all locations

let salesByLocation = 0;

let allLocationsSales = function(){
    for(i = 0; i < allLocations.length - 1; i++ )
    salesByLocation += allLocations[i].salesPerHour1000; 
};

allLocationsSales();
console.log(allLocations[0].dailySales());
console.log(allLocations[0].salesPerDay);
console.log(allLocations[0].salesPerHour1000);
console.log('all location sales value (10:00) is: ' + salesByLocation);

// Loop to create table rows from object array

// Function calls (to all above) to render complete table