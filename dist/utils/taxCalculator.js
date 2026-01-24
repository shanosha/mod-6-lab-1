import { Product } from '../modules/Product.js';
function calculateTax(product) {
    return product.getPriceWithTax();
}
export { calculateTax };
