import { Product } from "../modules/Product.js";
import { PhysicalProduct } from "../modules/PhysicalProduct.js";
// if product is a PhysicalProduct and weighs over 100, apply a 10 percent discont to the price
// else return the original price 
function bulkDiscountChecker(product) {
    let productWithDiscounts = product.price;
    if ((product instanceof PhysicalProduct) && (product.weight >= 100)) {
        productWithDiscounts = Number((product.price * .9).toFixed(2));
    }
    product.price = productWithDiscounts;
    return product;
}
export { bulkDiscountChecker };
