import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList.js";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    return (
        <div className="w-6/12 m-auto">
            <button className="bg-green-500 text-white cursor-pointer border rounded-md px-4 py-2" onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <ItemList itemCards={items} />
        </div>
    )
}

export default Cart