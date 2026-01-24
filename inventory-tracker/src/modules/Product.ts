export class Product {
    public sku: string;
    public name: string;
    public price: number;

    constructor(sku: string, name: string, price: number){
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        let str = `The product ${this.name} with SKU "${this.sku}" costs $${this.price}.`;
        return str;
    }

    getPriceWithTax(tax: number = 0): number {
        let total = Math.round((this.price + (this.price * (tax/100)))*100)/100;
        return total;
    }
}