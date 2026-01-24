import { Product } from '../modules/Product.js';
function sortByName(products) {
    products.sort((a, b) => a.name.localeCompare(b.name));
    return products;
}
function sortByPrice(products) {
    products.sort((a, b) => a.price - b.price);
    return products;
}
export { sortByName, sortByPrice };
