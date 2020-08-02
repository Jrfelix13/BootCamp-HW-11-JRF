// from data.js
var tableData = data;

// YOUR CODE HERE!
var uniqueDate = [];
var distinctDate = [];
for (let i = 0; i < tableData.length; i++) {
    if (!uniqueDate[tableData[i].datetime]) {
        distinctDate.push(tableData[i].datetime);
        uniqueDate[tableData[i].datetime] = 1;
    }
}
console.log(uniqueDate);
console.log(distinctDate);

var uniqueCity = [];
var distinctCity = [];
for (let i = 0; i < tableData.length; i++) {
    if (!uniqueCity[tableData[i].city]) {
        distinctCity.push(tableData[i].city);
        uniqueCity[tableData[i].city] = 1;
    }
}
console.log(uniqueCity);
console.log(distinctCity);

var uniqueState = [];
var distinctState = [];
for (let i = 0; i < tableData.length; i++) {
    if (!uniqueState[tableData[i].state]) {
        distinctState.push(tableData[i].state);
        uniqueState[tableData[i].state] = 1;
    }
}
console.log(uniqueState);
console.log(distinctState);

var uniqueCountry = [];
var distinctCountry = [];
for (let i = 0; i < tableData.length; i++) {
    if (!uniqueCountry[tableData[i].country]) {
        distinctCountry.push(tableData[i].country);
        uniqueCountry[tableData[i].country] = 1;
    }
}
console.log(uniqueCountry);
console.log(distinctCountry);

var uniqueShape = [];
var distinctShape = [];
for (let i = 0; i < tableData.length; i++) {
    if (!uniqueShape[tableData[i].shape]) {
        distinctShape.push(tableData[i].shape);
        uniqueShape[tableData[i].shape] = 1;
    }
}
console.log(uniqueShape);
console.log(distinctShape);

var selDate = document.getElementById('selDate');
for (var i = 0; i < distinctDate.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = distinctDate[i];
    opt.value = distinctDate[i];
    selDate.appendChild(opt);
}

var selCity = document.getElementById('selCity');
for (var i = 0; i < distinctCity.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = distinctCity[i];
    opt.value = distinctCity[i];
    selCity.appendChild(opt);
}

var selState = document.getElementById('selState');
for (var i = 0; i < distinctState.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = distinctState[i];
    opt.value = distinctState[i];
    selState.appendChild(opt);
}

var selCountry = document.getElementById('selCountry');
for (var i = 0; i < distinctCountry.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = distinctCountry[i];
    opt.value = distinctCountry[i];
    selCountry.appendChild(opt);
}

var selShape = document.getElementById('selShape');
for (var i = 0; i < distinctShape.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = distinctShape[i];
    opt.value = distinctShape[i];
    selShape.appendChild(opt);
}

var dropdownDate = d3.select("#selDate");
var dropdownCity = d3.select("#selCity");
var dropdownState = d3.select("#selState");
var dropdownCountry = d3.select("#selCountry");
var dropdownShape = d3.select("#selShape");
var button = d3.select("#filter-btn");

button.on("click", function() {
    for (var i = document.getElementById("ufo-table").rows.length; i > 0; i--) {
        document.getElementById("ufo-table").deleteRow(i - 1);
    }
    var newDate = dropdownDate.property("value");
    console.log(newDate);
    var newCity = dropdownCity.property("value");
    console.log(newCity);
    var newState = dropdownState.property("value");
    console.log(newState);
    var newCountry = dropdownCountry.property("value");
    console.log(newCountry);
    var newShape = dropdownShape.property("value");
    console.log(newShape);

    function filterDate(obs) {
        return obs.datetime === newDate && obs.city === newCity && obs.state === newState && obs.country === newCountry && obs.shape === newShape;
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