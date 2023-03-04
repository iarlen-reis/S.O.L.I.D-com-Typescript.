// Creating a abstract class of discount with method calculate:
export abstract class Discount {
  protected discount: number = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

// Create discounts with atribute discount customized:
export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
