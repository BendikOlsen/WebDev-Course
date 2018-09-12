var faker = require('faker');

var product = faker.commerce.productName()

console.log ("============================================");
console.log ("          WELCOME TO MY SHOP");
console.log ("============================================");

for (var i = 0; i < 10; i++) {
    console.log("** This awesome " + product + ". Is indeed a bargin. At only " + faker.commerce.price() + "$ this is yours to keep.");
};

