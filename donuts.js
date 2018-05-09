/* exported donutList */
'use strict';


class Donut {
    constructor(name, seasonal, cost, inventory) {
        this.name = name;
        this.seasonal = seasonal;
        this.cost = cost;
        this.inventory = inventory;
    }
}

const cinnamon = new Donut (
    'Cinnamon and Sugar',
    false,
    3.25,
    10
);

const blueberry = new Donut (
    'Blueberry Bourbon Basil',
    false,
    4.00,
    12
);

const chocolate = new Donut (
    'Chocolate Almond Ganache',
    false,
    3.75,
    1
);

const cointreau = new Donut (
    'Cointreau Creme Brule',
    true,
    4.25,
    14
);

const maple = new Donut (
    'Real Maple Bacon',
    true,
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