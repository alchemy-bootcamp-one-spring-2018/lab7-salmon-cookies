class Cookie {

    constructor(location, cookieType, stock, cost, price) {
        this.location = location;
        this.cookieType = cookieType;
        this.stock = stock;
        this.cost = cost;
        this.price = price;
        this.profit = price - cost;
    }

    renderMe() {
        render([this.location, this.cookieType, this.stock, this.cost, this.price, this.profit], 'body');
    }
}