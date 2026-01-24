import {PhysicalProduct} from './modules/PhysicalProduct.js'
import {DigitalProduct} from './modules/DigitalProduct.js'
import {calculateTax} from './utils/taxCalculator.js'
import {sortByName, sortByPrice} from './utils/sort.js'

const products = [
    new PhysicalProduct("SKU-50001","Computer Monitor",150,10),
    new PhysicalProduct("SKU-50002","Hoodie",10,1),
    new PhysicalProduct("SKU-50003","Purse",30,2),
    new PhysicalProduct("SKU-50004","Book Bag",20,2),
    new DigitalProduct("SKU-50005","eBook",5,100),
    new DigitalProduct("SKU-50006","Digital Catalog",2,100)
];

for(let product of products) {
    console.log(product.displayDetails() + ` The total with tax is $${calculateTax(product)}.`);
}

console.log("LIST SORTED BY NAME");
console.log(sortByName(products));

console.log("LIST SORTED BY PRICE");
console.log(sortByPrice(products));