/*globals cornArray headerArray*/
/* exported cornType */
'use scrict';

function makeHeader() {
    var thead = document.getElementById('t-head');
    var child = document.createElement('tr');
    thead.appendChild(child);
    
    for(let i in headerArray){
        let cornProperty = document.createElement('td');
        child.appendChild(cornProperty);
        cornProperty.textContent = headerArray[i];
    }
}

for(let i in cornArray){
    cornArray[i].renderBody();
}

function makeFooter(){
    var parent = document.getElementById('t-foot');
    var child = document.createElement('tr');
    parent.appendChild(child);
    for(let i in footerArray){
        let footerData = document.createElement('td');
        child.appendChild(footerData);
        footerData.textContent = footerArray[i];
    }

}
makeHeader();
makeFooter();