export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails(discountMsg = "") {
        let str = `The product ${this.name} with SKU "${this.sku}" price ${discountMsg}is ${this.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}.`;
        return str;
    }
    getPriceWithTax(tax = 0) {
        let total = Math.round((this.price + (this.price * (tax / 100))) * 100) / 100;
        return total;
    }
}
