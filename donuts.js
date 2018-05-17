/* exported donutList */
'use strict';


class Donut {
    constructor(name, available, calories, cost, inventory, image) {
        this.name = name;
        this.available = available;
        this.calories = calories;
        this.cost = cost;
        this.inventory = inventory;
        this.image = image;
    }

    createImage() {
        const image = document.createElement('img');
        image.src = './images/' + this.image;
        return image;
    }
}

const cinnamon = new Donut (
    'Cinnamon and Sugar',
    true,
    130,
    3.25,
    10,
    'cinnamon.jpg'
);

const blueberry = new Donut (
    'Blueberry Bourbon Basil',
    true,
    170,
    4.00,
    12,
    'blueberry.jpg'
);

const chocolate = new Donut (
    'Chocolate Almond Ganache',
    true,
    195,
    3.75,
    1,
    'chocolate.jpg'
);

const cointreau = new Donut (
    'Cointreau Creme Brule',
    false,
    95,
    4.25,
    0,
    'cointreau.jpg'
);

const maple = new Donut (
    'Real Maple Bacon',
    false,
    230,
    2.75,
    0,
    'maple.jpg'
);

const buttermilk = new Donut (
    'Buttermilk Old Fashioned',
    false,
    170,
    3.00,
    0,
    'buttermilk.jpg'
);

const raspberry = new Donut (
    'Raspberry Rosemary Buttermilk',
    true,
    130,
    3.50,
    12,
    'raspberry.jpg'
);

const donutList = [
    cinnamon,
    blueberry,
    chocolate,
    cointreau,
    maple,
    buttermilk,
    raspberry
];