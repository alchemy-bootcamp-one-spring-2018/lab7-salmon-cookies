/* exported Cookie chocolateCookie oatmealCookie bananaCookie cookieArray */
'use strict';

//object constructor using the class syntax
class Cookie {
    constructor(name, type, taste, price, cost, inventory) {
        this.name = name;
        this.type = type;
        this.taste = taste;
        this.price = price;
        this.cost = cost;
        this.inventory = inventory;
    }

    sell(amount) {
        return this.inventory -= amount;
    }

    bake(count) {
        return this.inventory += count;
    }

    profit() {
        return this.price - this.cost;
    }
}

var salmonCookie = new Cookie('Salmon', 'sandwich', 'savory', 5, 1.5, 24);
console.log(salmonCookie);

var chocolateCookie = new Cookie('Chocolate', 'crispy', 'semi-sweet', 4, .75, 24);

var oatmealCookie = new Cookie('Oatmeal', 'chewy', 'sweet', 3.5, .5, 24);

var bananaCookie = new Cookie('Banana', 'ice cream', 'sweet', 6, 2, 16);

var cookieArray = [salmonCookie, chocolateCookie, oatmealCookie, bananaCookie];
