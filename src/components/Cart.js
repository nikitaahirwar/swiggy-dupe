import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice.js";
import { useEffect, useState } from "react";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const sum = items.reduce((acc, item) => {
      acc = acc + item.card.info.price;
      return acc;
    }, 0);
    setTotal(sum);
  }, [items]);

  return (
    <div className="md:w-6/12 m-1 md:m-auto">
      <button
        className="bg-green-500 text-white cursor-pointer border rounded-md px-4 py-2"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <ItemList itemCards={items} />
      <div className="w-screen md:w-6/12 fixed bottom-0 p-2 my-2 bg-green-400 flex justify-between text-white font-bold">
        <div>Total: {total / 100} Rs/-</div>
        <div>Proceed to pay</div>
      </div>
    </div>
  );
};

export default Cart;
