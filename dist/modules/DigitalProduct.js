import { Product } from './Product.js';
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        let total = this.price;
        return total;
    }
    get formattedWeight() {
        return `${this.fileSize} megabytes`;
    }
}
