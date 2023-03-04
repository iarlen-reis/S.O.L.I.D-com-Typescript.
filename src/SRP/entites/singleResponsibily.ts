/*
Aprendendo Single Responsibility com orientação a objetos:
- Uma classe só deve ter apenas 1 motivo para mudar.

- Você deve pensar o que é responsabilidade na sua aplicação.

- È basicamente você definir uma classe para ter apenas uma responsabilidade,
    ela será responsavel por aquilo e só.

- Se a classe precisar fazer mais coisas, essas coisas devem ter coerencia
    com a funcionalidade principal da classe.


*/

import { CartItem } from "./interfaces/cartIem";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
