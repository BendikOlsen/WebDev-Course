var faker = require('faker');

console.log ("============================================");
console.log ("          WELCOME TO MY SHOP");
console.log ("============================================");

for (var i = 0; i < 10; i++) {
    console.log("** This awesome " + faker.commerce.productName() + ". Is indeed a bargin. At only " + faker.commerce.price() + "$ this is yours to keep.");
};

