// from data.js
var tableData = data;

// YOUR CODE HERE!
//var date = tableData.datetime;
//var city = tableData.city;
//var state = tableData.state;
//var country = tableData.country;
//var shape = tableData.shape;
//var shape = tableData.durationMinutes;
//var comments = tableData.comments;

var inputField = d3.select("#datetime");

inputField.on("change", function() {
    var newDate = d3.event.target.value;
    console.log(newDate);

    function filterDate(obs) {
        return obs.datetime === newDate;
    };
    var filteredDate = data.filter(filterDate);
    console.log(filteredDate);
    var cities = filteredDate.map(data => data.city);
    console.log(cities);
    var state = filteredDate.map(data => data.state);
    console.log(state);
    var country = filteredDate.map(data => data.country);
    console.log(country);
    var shape = filteredDate.map(data => data.shape);
    console.log(shape);
    var duration = filteredDate.map(data => data.durationMinutes);
    console.log(duration);
    var comments = filteredDate.map(data => data.comments);
    console.log(comments);

    function generateTable(table, x) {
        for (let element of x) {
            let row = table.insertRow();
            for (key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
                cell.appendChild(text);
            }
        }
    }
    let table = document.querySelector("table");
    let x = Object.keys(filteredDate[0]);
    generateTable(table, filteredDate);
});