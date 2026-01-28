import {Product} from './Product.js'

export class DigitalProduct extends Product {
    public fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku,name,price);
        this.fileSize = fileSize;
    }

    displayDetails(): string {
        let str = `${super.displayDetails()}"\nThe filesize is ${this.formattedFilesize}.`;
        return str;
    }

    getPriceWithTax(): number {
        let total = this.price;
        return total;
    }

    get formattedFilesize(): string {
        return `${this.fileSize} megabytes`;
    }
}