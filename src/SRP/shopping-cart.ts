type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

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

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vázio.");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(
      `Seu pedido com total de ${
        this._items.length
      } item(s) e valor de R$${this.total()} foi recebido com sucesso.`
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log("Messagem Recebida:", message);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso!");
  }

  clear(): void {
    this._items.length = 0;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({
  name: "Camiseta",
  price: 20.65,
});

shoppingCart.addItem({
  name: "Caderno",
  price: 45.2,
});

shoppingCart.addItem({
  name: "Mochila",
  price: 101.0,
});

console.log(shoppingCart.orderStatus);

shoppingCart.checkout();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
