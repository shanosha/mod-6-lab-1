import {Product} from './Product.js'

interface DiscountableProduct {
    discount: number;
    applyDiscount(): number;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
    public weight: number;
    public discount: number;

    constructor(sku: string, name: string, price: number, weight: number, discount: number = 0){
        super(sku,name,price);
        this.weight = weight;
        this.discount = discount;
    }

    displayDetails(): string {
        let str = `${super.displayDetails()}\nThe weight is ${this.formattedWeight}.`;
        return str;
    }

    getPriceWithTax(): number {
        let total = Math.round((this.price + (this.price * (10/100)))*100)/100;
        return total;
    }

    get formattedWeight(): string {
        return `${(this.weight * 0.45359237).toFixed(2)} kg`;
    }

    applyDiscount(): number {
        let total = Math.round((this.price - (this.price * (this.discount/100)))*100)/100;
        return total;
    }
}