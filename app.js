/*globals cornArray headerArray*/
'use scrict';

function makeHeader() {
    var thead = document.getElementById('t-head');
    var child = document.createElement('tr');
    var cornType = document.createElement('td');
    thead.appendChild(child);
    child.appendChild(cornType);
    cornType.textContent = 'Type of Corn';
    for(let i = 0; i < headerArray.length; i++){
        let cornProperty = document.createElement('td');
        child.appendChild(cornProperty);
        cornProperty.textContent = headerArray[i];
    }
}



// function makefooter(){
//     var parent = document.getElementById('t-foot');
//     var child = document.createElement('td');
//     parent.appendChild(child);
// }
// var cornLayout = document.getElementById(t-head);
// // var td = cornLayout.content.
// let td = 
// for(let i = 0; i < cornArray.length; i++){
//     td[0].textContent = cornArray[i].name;
//     td[1].textContent = cornArray[i].flavor;
//     td[2].textContent = cornArray[i].available;
//     td[3].textContent = cornArray[i].cost;
//     td[4].textContent = cornArray[i].inventory;
// }
makeHeader();