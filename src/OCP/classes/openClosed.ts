/*
Aprendendo principio aberto e fechado (open-closed):
- Entidades devem está abertas para extensões e fechadas para modificações.

- Podemos utilizar o padrão de projetos strategy.
*/

// importing discount class:
import { Discount } from "./discount";
import { CartItem } from "./interfaces/cartIem";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  // create a atribute discount and setting type as Discount classe:
  constructor(private readonly discount: Discount) {}

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  // use atribute discount:
  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
