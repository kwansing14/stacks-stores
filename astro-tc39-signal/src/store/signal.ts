import { Signal } from "signal-polyfill";
import { effect } from "./effect";

export const cart = new Signal.State([
  { id: 1, name: "Apple", price: 1.5, count: 1 },
  { id: 2, name: "Banana", price: 1, count: 5 },
]);

export const total = new Signal.Computed<number>(() =>
  cart.get().reduce((acc, p) => acc + p.price * p.count, 0),
);

export const discount = new Signal.State(0.1);

export const grandTotal = new Signal.Computed<number>(
  () => total.get() * (1 - discount.get()),
);

export { effect };
