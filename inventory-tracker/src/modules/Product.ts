export class Product {
    public sku: string;
    public name: string;
    public price: number;

    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(discountMsg = ""): string {
        let str = `The product ${this.name} with SKU "${this.sku}" price ${discountMsg}is ${this.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}.`;
        return str;
    }

    getPriceWithTax(tax: number = 0): number {
        let total = Math.round((this.price + (this.price * (tax/100)))*100)/100;
        return total;
    }
}