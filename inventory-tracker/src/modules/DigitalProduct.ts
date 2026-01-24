import {Product} from './Product.js'

export class DigitalProduct extends Product {
    public fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku,name,price);
        this.fileSize = fileSize;
    }

    getPriceWithTax(): number {
        let total = this.price;
        return total;
    }

    get formattedWeight(): string {
        return `${this.fileSize} megabytes`;
    }
}