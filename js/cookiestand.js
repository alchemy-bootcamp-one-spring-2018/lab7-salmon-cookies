console.log('cookiestand.js is loading');

/* 
object constructor to build array of cookie stand locations
containing an array of times with sales figures for each time slot
*/

class Cookiestand {
    constructor(location, salesPerHour1000, salesPerHour1100, salesPerHour1200, salesPerHour1300, salesPerHour1400, salesPerHour1500,salesPerHour1600, salesPerHour1700, salesPerHour1800) 
    {
        this.location = location;
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

    }
}

let yamhillAve = new Cookiestand('Yamhill Ave', 234, 341, 445, 543, 342, 213, 230, 660, 560);

console.log(yamhillAve);