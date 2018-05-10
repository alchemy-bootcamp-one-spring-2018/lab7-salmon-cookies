let inputsToAdd = ['<input id="txt-0" type="text">', '<input id="txt-1" type="text">', '<input id="txt-2" type="text">', '<input id="txt-3" type="text">', '<input id="txt-4" type="text">', '<input type="submit" onclick="addRow()">']
render(inputsToAdd, 'foot', 'footer');

function addRow() {
    console.log('in the addRow');
    let newArray = [];
    for(let i = 0; i < inputsToAdd.length - 1; i++) {
        console.log(i);
        newArray.push(document.getElementById('txt-' + i).value);
    }
    cookieArray.push(cookieId)
    render(newArray, 'body');
}