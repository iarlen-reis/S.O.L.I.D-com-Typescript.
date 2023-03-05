/*
Aprendendo principio da substituição de liskov:
- Subtipos precisam  ser substituiveis por seus tipo de base.

- Se meu progama espera um Animal, algo do tipo Cachorro (que herda
    de Animal) deve servir como qualquer outro Animal.


*/

import { Discount } from "./discount";
import { CartItem } from "./interfaces/cartIem";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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
