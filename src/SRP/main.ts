import { ShoppingCart } from "./entites/singleResponsibily";
import { Order } from "./entites/order";
import { Messaging } from "./services/message";
import { Persistency } from "./services/persistency";
import { Product } from "./entites/product";

// dependencias:
const shoppingCart = new ShoppingCart();
const persistency = new Persistency();
const message = new Messaging();

const order = new Order(shoppingCart, message, persistency);

shoppingCart.addItem(new Product("Caderno", 20.65));
shoppingCart.addItem(new Product("Camiseta", 45.2));
shoppingCart.addItem(new Product("Mochila", 101.0));

console.log(order.orderStatus);
order.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
