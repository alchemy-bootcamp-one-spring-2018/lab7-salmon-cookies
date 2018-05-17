/* exported CoffeeDrinks coffeeList */

// create Class (include properties: name, temp, size, price, calories) <X>
class CoffeeDrinks {
    
    constructor(name, temp, size, price, calories) {
        this.name = name;
        this.temp = temp;
        this.size = size;
        this.price = price;
        this.calories = calories;
    }
}

//instantiating coffee objects to use later in an array <X>
const coffee = new CoffeeDrinks('drip coffee', 'hot', 'small - medium- large', 2.50, 5);
const americano = new CoffeeDrinks('americano', 'hot/iced', 'small - medium - large', 3.00, 5);
const latte = new CoffeeDrinks('latte', 'hot/iced', 'small - medium - large', 3.50, 10);


// creating an array of coffee objects to call upon in my app.js to include in data table <X>
const coffeeList = [
    coffee,
    americano,
    latte
];






