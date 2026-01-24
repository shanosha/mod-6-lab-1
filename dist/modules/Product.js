export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        let str = `The product ${this.name} with SKU "${this.sku}" costs $${this.price}.`;
        return str;
    }
    getPriceWithTax(tax = 0) {
        let total = Math.round((this.price + (this.price * (tax / 100))) * 100) / 100;
        return total;
    }
}
