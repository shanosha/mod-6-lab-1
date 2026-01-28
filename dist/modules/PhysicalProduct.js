import { Product } from './Product.js';
export class PhysicalProduct extends Product {
    weight;
    discount = 0;
    discountApplied = false;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    displayDetails() {
        let discoutnMsg = this.discountApplied ? `with discount of ${this.discount}% ` : "";
        let str = `${super.displayDetails(discoutnMsg)}\nThe weight is ${this.formattedWeight}.`;
        return str;
    }
    getPriceWithTax() {
        let total = Math.round((this.price + (this.price * (10 / 100))) * 100) / 100;
        return total;
    }
    get formattedWeight() {
        return `${(this.weight * 0.45359237).toFixed(2)} kg, ${this.weight} LBS`;
    }
    applyDiscount(discount = 0) {
        this.discount = discount;
        this.price = Math.round((this.price - (this.price * (discount / 100))) * 100) / 100;
        return this;
    }
}
