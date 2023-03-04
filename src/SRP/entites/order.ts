import { OrderStatus } from "./interfaces/oderStatus";
import { ShoppingCart } from "./singleResponsibily";
import { Messaging } from "../services/message";
import { Persistency } from "../services/persistency";
export class Order {
  private _orderStatus: OrderStatus = "open";

  // Injenção de dependecias
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vázio.");
      return;
    }

    this.messaging.sendMessage(
      `Seu pedido com total de ${
        this.cart.items.length
      } item(s) e valor de R$${this.cart.total()} foi recebido com sucesso.`
    );

    this._orderStatus = "closed";

    this.persistency.saveOrder();
    this.cart.clear();
  }
}
