import { PhysicalProduct } from './modules/PhysicalProduct.js';
import { DigitalProduct } from './modules/DigitalProduct.js';
import { calculateTax } from './utils/taxCalculator.js';
import { sortByName, sortByPrice } from './utils/sort.js';
import { bulkDiscountChecker } from './utils/bulkDiscount.js';
// Set an array of products
const products = [
    new PhysicalProduct("SKU-50001", "Computer Monitor", 150, 10),
    new PhysicalProduct("SKU-50002", "Hoodie", 10, 1),
    new PhysicalProduct("SKU-50003", "Purse", 30, 2),
    new PhysicalProduct("SKU-50004", "Book Bag", 20, 2),
    new DigitalProduct("SKU-50005", "eBook", 5, 50),
    new DigitalProduct("SKU-50006", "Digital Catalog", 2, 30),
    new PhysicalProduct("SKU-50007", "Bulk Protein Item", 200, 100)
];
// Console log the product details
let productDetails = "\nProduct Details:";
for (let product of products) {
    bulkDiscountChecker(product); // if the product is a pysical product and over 100 LBS, a discount will be applied
    productDetails += `\n\n${product.displayDetails()}\nThe total with taxes is ${calculateTax(product).toLocaleString("en-US", { style: "currency", currency: "USD" })}}.`;
}
console.log(productDetails);
// Sort the products array by name, then log the array
console.log("\nLIST SORTED BY NAME");
console.dir(sortByName(products));
// Sort the products array by price, then log the array
console.log("\nLIST SORTED BY PRICE");
console.log(sortByPrice(products));
