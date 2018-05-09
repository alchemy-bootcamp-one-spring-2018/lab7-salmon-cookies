/* exported donutList */
'use strict';


class Donut {
    constructor(name, available, cost, inventory) {
        this.name = name;
        this.available = available;
        this.cost = cost;
        this.inventory = inventory;
    }
}

const cinnamon = new Donut (
    'Cinnamon and Sugar',
    true,
    3.25,
    10
);

const blueberry = new Donut (
    'Blueberry Bourbon Basil',
    true,
    4.00,
    12
);

const chocolate = new Donut (
    'Chocolate Almond Ganache',
    true,
    3.75,
    1
);

const cointreau = new Donut (
    'Cointreau Creme Brule',
    false,
    4.25,
    14
);

const maple = new Donut (
    'Real Maple Bacon',
    false,
    2.75,
    0
);

const donutList = [
    cinnamon,
    blueberry,
    chocolate,
    cointreau,
    maple
];