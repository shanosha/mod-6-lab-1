import {Product} from '../modules/Product.js'

function calculateTax(product: Product): number{
    return product.getPriceWithTax();
}

export {calculateTax}