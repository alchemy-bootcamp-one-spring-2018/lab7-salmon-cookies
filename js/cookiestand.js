console.log('cookiestand.js is loading');

/* 
object constructor to build array of cookie stand locations
containing an array of times with sales figures for each time slot
*/

class Cookiestand {
    constructor(location, hours, salesPerHour1000, salesPerHour1100, salesPerHour1200, salesPerHour1300, salesPerHour1400, salesPerHour1500,salesPerHour1600, salesPerHour1700, salesPerHour1800, ) 
    {
        this.location = location;
        this.hours = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];
        this.salesPerHour1000 = salesPerHour1000;
        this.salesPerHour1100 = salesPerHour1100;
        this.salesPerHour1200 = salesPerHour1200;
        this.salesPerHour1300 = salesPerHour1300;
        this.salesPerHour1400 = salesPerHour1400;
        this.salesPerHour1500 = salesPerHour1500;
        this.salesPerHour1600 = salesPerHour1600;
        this.salesPerHour1700 = salesPerHour1700;
        this.salesPerHour1800 = salesPerHour1800;

    //Function for creating totals per day

       this.dailySales = function(){
        return this.salesPerHour1000 + this.salesPerHour1100;
       };

    }
}

// Create all location objects

let yamhillAve = new Cookiestand('Yamhill Ave', 234, 341, 445, 543, 342, 213, 230, 660, 560);
let couchStreet = new Cookiestand('Couch Street', 123, 221, 231, 113, 112, 145, 165, 330, 441);
let grandAve = new Cookiestand('Grand Avenue', 312, 662, 335, 725, 432, 312, 654, 452, 123);
let multnomahVillage = new Cookiestand('Multnomah Village', 312, 223, 123, 444, 615, 431, 237, 333, 216);
let mainStreet = new Cookiestand('Main Street', 432, 312, 654, 452, 312, 662, 432, 312, 452);
let lombardStreet = new Cookiestand('Lombard Street', 234, 123, 221, 231, 113, 112, 654, 291, 128);

// place all location objects into and array

var allLocations = [yamhillAve, couchStreet, grandAve, multnomahVillage, mainStreet, lombardStreet];

console.log(yamhillAve);
console.log(yamhillAve.hours[5]);
console.log(allLocations[2]);

console.log(yamhillAve.dailySales());