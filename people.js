'use strict';


class Corn {
    constructor(name, flavor, available, inventory, cost) {
        this.name = name;
        this.flavor = flavor;
        this.available = available;
        this.inventory = inventory;
        this.cost = cost;
    }

}

const popCorn = new Corn (
    'Popcorn',
    'Buttery',
    true,
    100,
    '$5.00'
);

const yellowCorn = new Corn (
    'Yellow Corn',
    'Sweet',
    true,
    130,
    '$6.00'
);

const blueCorn = new Corn (
    'Blue Corn',
    'Savory',
    true,
    60,
    '$4.00'
);

const whiteCorn = new Corn (
    'White Corn',
    'Sweet',
    false,
    0,
    '$6.50'
);

const redCorn = new Corn (
    'Red Corn',
    'Spicy',
    true,
    50,
    '$5.50'
);

const blackCorn = new Corn (
    'Black Corn',
    'Salty-Sweet',
    false,
    85,
    '$9.00'
);

const cornArray = [
    popCorn,
    yellowCorn,
    blueCorn,
    whiteCorn,
    redCorn,
    blackCorn
];