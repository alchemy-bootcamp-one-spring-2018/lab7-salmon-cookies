class Batch {

  constructor(batch,salmonType,size,inventory,cost,price) {
      this.batch = batch;
      this.salmonType = salmonType;
      this.size = size;
      this.inventory = inventory;
      this.cost = cost;
      this.price = price;
}

  batch() {
  return this.batch--;
}

  sell() {
  return this.inventory--;
}

  profit() {
  return this.price - this.cost;
  }
}



let batch1 = new Batch(1,"Roe","S",15,25.00)

let batch2 = new Batch(2,"King","L",20,40.00)

console.log('batch1', batch1);

console.log('batch2', batch2);

batch1.price = 20;
console.log('price', batch1.price);
console.log('this',this);

batch2.price = 40;
console.log('price', batch2.price);
console.log('this',this);
