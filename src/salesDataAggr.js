var salesData = [
    { region: "North", product: "A", amount: 230 },
    { region: "North", product: "B", amount: 180 },
    { region: "South", product: "A", amount: 205 },
    { region: "South", product: "B", amount: 25 },
    { region: "East", product: "A", amount: 100 },
    { region: "West", product: "B", amount: 150 },
    { region: "East", product: "C", amount: 101 },
    { region: "South", product: "C", amount: 250 },
];
//////////////////////////////
// Aggregate data by region //
//////////////////////////////
var salesByRegionAggregate = salesData.reduce(function (result, data) {
    result[data.region] = (result[data.region] || 0) + data.amount;
    return result;
}, {});
////////////////////////////////////////
// Display aggregated data by region  //
////////////////////////////////////////
console.log("Sales by Region:");
for (var region in salesByRegionAggregate) {
    console.log("".concat(region, ": ").concat(salesByRegionAggregate[region]));
}
///////////////////////////////
// Aggregate data by product //
///////////////////////////////
var salesByProduct = salesData.reduce(function (result, data) {
    result[data.product] = (result[data.product] || 0) + data.amount;
    return result;
}, {});
/////////////////////////////////////////
// Display aggregated data  by product //
/////////////////////////////////////////
console.log("\nSales by Product:");
for (var product in salesByProduct) {
    console.log("".concat(product, ": ").concat(salesByProduct[product]));
}
