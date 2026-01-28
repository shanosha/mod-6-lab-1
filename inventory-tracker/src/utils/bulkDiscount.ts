import {Product} from "../modules/Product.js";
import {PhysicalProduct} from "../modules/PhysicalProduct.js";

// if product is a PhysicalProduct and weighs over 100 LBS, apply a 10 percent discont to the price.
// As per Quinn when I asked about the requirements, we can use weight.
function bulkDiscountChecker(product: Product): Product {
    if((product instanceof PhysicalProduct) && (product.weight >= 100)){
        product.applyDiscount(10);
        product.discountApplied = true;
    }
    return product;
}

export {bulkDiscountChecker};