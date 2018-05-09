'use strict';
/* exported  */

class Batch {
    constructor(batch, salmonType, size, inventory, cost, price){
        this.batch = batch;
        this.salmonType = salmonType;
        this.size = size;
        this.inventory = inventory;
        this.cost = cost;
        this.price = price; 
    }
    sell() {
        return this.inventory--;
    }

    profit(){
        return this.price - this.cost;
    }
}

let batch1 = new Batch(1,"pacific", "M", 20, 10.00, 20.00);
console.log('batch1' , batch1);

// var fruits = [
//     {
//         img: 'images/apple.png',
//         name: 'apple',
//         origin: 'usa',
//         color: 'red',
//         season: 'fall',
        
//         createLi: function() {
//             var li = document.createElement('li');
//             li.textContent = 'origin: ' + this.origin + ' peak season: ' + this.season;
//             li.style.color = this.color;
//             return li;
//         },
//         fruitImage: function () {
//             var img = document.createElement('img');
//             img.setAttribute('src' , this.img);
//             return img;
//         }    
//     }
  
// ];