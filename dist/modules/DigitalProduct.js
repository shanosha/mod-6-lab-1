import { Product } from './Product.js';
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    displayDetails() {
        let str = `${super.displayDetails()}"\nThe filesize is ${this.formattedFilesize}.`;
        return str;
    }
    getPriceWithTax() {
        let total = this.price;
        return total;
    }
    get formattedFilesize() {
        return `${this.fileSize} megabytes`;
    }
}
