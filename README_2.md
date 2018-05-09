# Girl Scout Cookie Report

This app displays a table of data showing a hypothetical number of boxes sold on a single weekend by a girl scout troop.
The number of boxes are generated randomly (0 to 60) each time the page is refreshed.
The table shows a total for each day in the bottom row, and a grand total under the table.

The various functions, the Store class, and the storeList are in functions.js.  The main flow of the app is in app.js.

I made the functions createFooter and createHeader because they were required.  They are only called one time each,
and are very short, so I would have been just as happy putting those lines directly in the app.js file.