function update() {
    for(let i = 0; i < cookieArray.length + 1; i++) {
        if(i === cookieArray.length) {
            footer();
            console.log('totals should be displayed');
            continue;
        }
        cookieArray[i].renderMe();
    }
}