let headerArray = ['Location', 'Type', 'Stock', 'Cost', 'Profit', 'Price']

class Cookie {

    constructor(location, cookieType, stock, cost, price) {
        this.location = location;
        this.cookieType = cookieType;
        this.stock = stock;
        this.cost = cost;
        this.profit = price - cost;
        this.price = price;
    }

    render() {
        let tab = document.getElementById('table');
        let row = document.createElement('tr');
        let dataArray = [this.location, this.cookieType, this.stock, this.cost, this.profit, this.price];
        for(let i in dataArray) {
            let data = document.createElement('td');
            data.textContent = dataArray[i];
            row.appendChild(data);
        }
        tab.appendChild(row);
    }
}
// Instantiate cookie objects
let chocolateChip = new Cookie('PDX', 'Chocolate Chip', 100, 5, 10);
let oatmealRaisin = new Cookie('MSP', 'Oatmeal Rasin', 80, 4, 8);
let snickerdoodle = new Cookie('FAR', 'Snickerdoodle', 50, 7, 15);
let salmondoodles = new Cookie('SEA', 'Gross', 0, 0, 100);

let cookieArray = [chocolateChip, oatmealRaisin, snickerdoodle, salmondoodles];

// Header/Footer stuff
function header() {
    let tab = document.getElementById('table');
    let row = document.createElement('tr');
    row.id = 'header';
    for(let i in headerArray) {
        let data = document.createElement('td');
        data.textContent = headerArray[i];
        row.appendChild(data);
    }
    tab.appendChild(row);
}

function footer() {
    let tab = document.getElementById('table');
    let row = document.createElement('tr');
    row.id = 'footer';
    let footerArray = [];
    footerArray.push('Total');
    footerArray.push('');
    // Stock, Cost, Profit, Price
    let totals = [0, 0, 0, 0];
    for(let i in cookieArray) {
        totals[0] += cookieArray[i].stock;
        totals[1] += cookieArray[i].cost;
        totals[2] += cookieArray[i].profit;
        totals[3] += cookieArray[i].price;
    }
    for(let i in totals) {
        footerArray.push(totals[i]);
    }
    for(let i in footerArray) {
        let data = document.createElement('td');
        data.textContent = footerArray[i];
        row.appendChild(data);
    }
    tab.appendChild(row);
}


// Call some functions
header();
for(let i in cookieArray) {
    cookieArray[i].render();
}
footer();