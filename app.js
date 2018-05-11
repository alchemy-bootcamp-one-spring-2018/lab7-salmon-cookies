console.log('hi');
class Fruit {

    constructor(image, name, color, texture, skinEdible) {
        this.image = image;
        this.name = name;
        this.color = color;
        this.texture = texture;
        this.skinEdible = skinEdible;
    }
    createThead() {

        const table = document.querySelector('#fruit-table');
        const tHead = document.createElement('thead');
        const tRow = document.createElement('tr');
        table.appendChild(tHead);
        tHead.appendChild(tRow);

        var heading = ['Image', 'Name', 'Color', 'Texture', 'Skin Edible'];
        for(var i = 0; i < heading.length; i++) {
            var colHead = document.createElement('td');
            colHead.textContent = heading[i];
            tRow.appendChild(colHead);
        }

        console.log(table);
        console.log(tHead);
 
        // return table;
    }

    createBody() {

        const table = document.querySelector('#fruit-table');
        const tBody = document.createElement('tbody');
        table.appendChild(tBody);
        
        for(var i = 0; i < fruits.length; i++) {
            const tRow = document.createElement('tr');

            var imageCell = document.createElement('td');
            imageCell.innerHTML = '<img src=' + fruits[i].image + '>';

            var nameCell = document.createElement('td');
            nameCell.textContent = fruits[i].name;

            var colorCell = document.createElement('td');
            colorCell.textContent = fruits[i].color;

            var textureCell = document.createElement('td');
            textureCell.textContent = fruits[i].texture;

            var skinEdibleCell = document.createElement('td');
            skinEdibleCell.textContent = fruits[i].skinEdible;
            
            tRow.appendChild(imageCell);
            tRow.appendChild(nameCell);
            tRow.appendChild(colorCell);
            tRow.appendChild(textureCell);
            tRow.appendChild(skinEdibleCell);
            tBody.appendChild(tRow);
        }
    }


}

let fruit1 = new Fruit('./images/Apple.jpg', 'Apple', 'Red', 'hard', true);
console.log('fruit1', fruit1);

let fruit2 = new Fruit('./images/Banana.jpg', 'Banana', 'Gold', 'soft', false);
console.log('fruit2', fruit2);

let fruit3 = new Fruit('./images/Cherries.jpg', 'Cherries', 'Red', 'soft', true);
console.log('fruit3', fruit3);

let fruit4 = new Fruit('./images/Mango.jpg', 'Mango', 'Gold', 'soft', false);
console.log('fruit4', fruit4);

let fruit5 = new Fruit('./images/Orange.jpg', 'Orange', 'Orange', 'soft', false);
console.log('fruit5', fruit5);

var fruits = [fruit1, fruit2, fruit3, fruit4, fruit5];
fruit5.createThead();
fruit5.createBody();
