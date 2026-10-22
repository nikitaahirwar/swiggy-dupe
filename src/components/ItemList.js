import { ITEM_IMG_CDN_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice.js";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      {itemCards.map((item, index) => (
        <div
          data-testid="food-items"
          key={index}
          className="flex justify-between my-2 p-2"
        >
          <div className="w-9/12">
            <div className="font-semibold">{item.card.info.name}</div>
            <div className="text-sm">{item.card.info.description}</div>
            <div className="text-sm">Price: ₹{item.card.info.price / 100}</div>
          </div>
          <div className="w-3/12 ">
            <div className="bg-green-500 text-white px-2 py-1 rounded-md absolute mt-30 ml-10">
              <button
                className="px-2 cursor-pointer"
                onClick={() => handleRemoveItem(item.card.info.id)}
              >
                -
              </button>
              <span>
                {cartItems.find(
                  (card) => card.card.info.id == item.card.info.id,
                )?.quantity || "0"}
              </span>
              <button
                className="px-2 cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
            <img
              className="h-36 w-full"
              src={ITEM_IMG_CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
