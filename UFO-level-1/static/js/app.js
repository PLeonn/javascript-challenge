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
let button_handler = d3.select