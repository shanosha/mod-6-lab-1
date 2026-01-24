import {Product} from '../modules/Product.js'

function sortByName(products: Product[]): Product[] {
    products.sort((a, b) => a.name.localeCompare(b.name));
    return products;
}

function sortByPrice(products: Product[]): Product[] {
    products.sort((a, b) => a.price - b.price);
    return products;
}

export {sortByName, sortByPrice}