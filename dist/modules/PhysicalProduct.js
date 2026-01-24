import { Product } from './Product.js';
export class PhysicalProduct extends Product {
    weight;
    discount;
    constructor(sku, name, price, weight, discount = 0) {
        super(sku, name, price);
        this.weight = weight;
        this.discount = discount;
    }
    displayDetails() {
        let str = `${super.displayDetails()}" The weight is ${this.formattedWeight}.`;
        return str;
    }
    getPriceWithTax() {
        let total = Math.round((this.price + (this.price * (10 / 100))) * 100) / 100;
        return total;
    }
    get formattedWeight() {
        return `${(this.weight * 0.45359237).toFixed(2)} kg`;
    }
    applyDiscount() {
        let total = Math.round((this.price - (this.price * (this.discount / 100))) * 100) / 100;
        return total;
    }
}
