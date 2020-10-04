// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference table body
var t_body = d3.select("tbody");

// Append table row and cell body tags onto data table with a nested for loop
// Append table rows here
tableData.forEach((sighting) => {
    let t_row = t_body.append("tr");

// Append cell body tags here
    Object.values(sighting).forEach(value => {
        let t_cell = t_row.append("td");
        t_cell.text(value);

    });
});

// Create event handler functionality for the application
// Create button-click handler
let button_handler = d3.select("#filter-btn");
button_handler.on("click", function() {

    // Stop page from refreshing upon click and 
    d3.event.preventDefault();

    // Remove any children from the list
    // -- Side note, I'm not sure why exactly I have to do this step, but 03-Activities/Activity 9 uses it, and mine won't work properly without it
    t_body.html("");

    // Isolate datetime value to filter dataset by date
    let datetimeElement = d3.select("#datetime");
    let datetime = datetimeElement.property("value");
    
    // Populate new table "filterData" with data filtered by user's date inputted
    let filterData = tableData.filter(sighting => sighting.datetime === datetime);

    // Print out the data filtered by date
    console.log(filterData)

    // Use code from above to create html table, but for filterData instead of tableData
    filterData.forEach((sighting) => {
        let t_row = t_body.append("tr");
    
        Object.values(sighting).forEach(value => {
            let t_cell = t_row.append("td");
            t_cell.text(value);
    
        });
    });
});