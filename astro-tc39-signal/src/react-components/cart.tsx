import { useSignal } from "../store/useSignal";
import { cart, discount, effect } from "../store/signal";
import { useRef, useEffect } from "react";
import CartList from "./CartList";

function AddProductButton({ name, price }: { name: string; price: number }) {
  const [cartItems, setCartItems] = useSignal(cart);
  return (
    <button
      onClick={() => {
        setCartItems([
          ...cartItems,
          { id: cartItems.length + 1, name, price, count: 1 },
        ]);
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded-full"
    >
      Add {name}
    </button>
  );
}

function ReactShoppingList() {
  const discountRef = useRef<HTMLSpanElement>(null);
  useEffect(
    () =>
      effect(() => {
        if (discountRef.current) {
          discountRef.current.innerText = discount.get().toString();
        }
      }),
    [],
  );

  console.log("shoplist");
  return (
    <>
      <CartList />
      <div className="mt-5 flex gap-3">
        <AddProductButton name="Apple" price={1.5} />
        <AddProductButton name="Banana" price={0.5} />
        <AddProductButton name="Cherry" price={2.5} />
      </div>
      <div>
        Discount:
        <span ref={discountRef}>{discount.get().toString()}</span>
      </div>
    </>
  );
}

export default ReactShoppingList;
