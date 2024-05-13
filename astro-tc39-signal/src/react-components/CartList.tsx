import { useComputed, useSignal } from "../store/useSignal";
import { cart, discount, total, grandTotal } from "../store/signal";

function CartList() {
  const [cartItems] = useSignal(cart);
  const [discountPercentage] = useSignal(discount);
  const totalAmount = useComputed(total);
  const grandTotalAmount = useComputed(grandTotal);

  console.log("cartlist");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">React Shopping List</h1>
      <div className="flex gap-2 mb-5 border-b-2 border-b-gray-700">
        <div className="flex-[0.3] font-bold">Item</div>
        <div className="flex-[0.3] font-bold">Price</div>
        <div className="flex-[0.3] font-bold">Count</div>
        <div className="flex-[0.1] font-bold">Total</div>
      </div>
      {cartItems.map((p) => (
        <div className="flex gap-2" key={p.id}>
          <div className="flex-[0.3]">{p.name}</div>
          <div className="flex-[0.3]">${p.price.toFixed(2)}</div>
          <div className="flex-[0.3]">{p.count}</div>
          <div className="flex-[0.1]">${(p.price * p.count).toFixed(2)}</div>
        </div>
      ))}
      <div className="flex gap-2 mt-5 border-t-2 border-t-gray-700">
        <div className="flex-[0.9]">Total</div>
        <div className="flex-[0.1]">{totalAmount.toFixed(2)}</div>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="flex-[0.3]">Discount</div>
        <div className="flex-[0.3]">
          {(discountPercentage * 100.0).toFixed(0)}%
        </div>
      </div>
      <div className="flex gap-2 mt-5 border-t-2 border-t-gray-700">
        <div className="flex-[0.9] font-bold">Grand Total</div>
        <div className="flex-[0.1]">${grandTotalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CartList;
