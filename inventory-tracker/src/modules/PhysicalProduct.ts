import {Product} from './Product.js'

interface DiscountableProduct {
    discount: number;
    applyDiscount(): PhysicalProduct;
}

export class PhysicalProduct extends Product implements DiscountableProduct {
    public weight: number;
    public discount: number = 0;
    public discountApplied: boolean = false;

    constructor(sku: string, name: string, price: number, weight: number){
        super(sku,name,price);
        this.weight = weight;
    }

    displayDetails(): string {
        let discoutnMsg = this.discountApplied ? `with discount of ${this.discount}% ` : "";
        let str = `${super.displayDetails(discoutnMsg)}\nThe weight is ${this.formattedWeight}.`;
        return str;
    }

    getPriceWithTax(): number {
        let total = Math.round((this.price + (this.price * (10/100)))*100)/100;
        return total;
    }

    get formattedWeight(): string {
        return `${(this.weight * 0.45359237).toFixed(2)} kg, ${this.weight} LBS`;
    }

    applyDiscount(discount: number = 0): PhysicalProduct {
        this.discount = discount;
        this.price = Math.round((this.price - (this.price * (discount/100)))*100)/100;
        return this;
    }
    
}