var faker = require('faker');
var database = { products : []};
for (var i=1;i<=300;i++)
{
    database.products.push({
        name: faker.commerce.productsname(),
        category: faker.lorem.sentences(),
        price: faker.commerce.price()
    });
}
console.log(JSON.stringify(database));

var faker = require('faker');
var database = {category : []};
for (var i=1;i<=300;i++)
{
    database.category.push({
        name:faker.commerce.categoryname()
    })
}