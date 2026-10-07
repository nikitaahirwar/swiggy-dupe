import { ITEM_IMG_CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux"; 
import { addItem, removeItem } from "../utils/cartSlice.js";
import { useState } from "react";

const ItemList = ({ itemCards }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const handleAddItem = (item) => {
        console.log('Add item to cart');
        dispatch(addItem(item));
        setCount(count + 1);
    }

    const handleRemoveItem = (item) => {
        console.log('Remove item from cart');
        dispatch(removeItem(item));
        setCount(count - 1);
    }

    return (
        <div>
            {itemCards.map((item, index) => (
                <div data-testid='food-items' key={index} className="flex justify-between my-2 p-2">
                    <div className="w-9/12">
                        <div className="font-semibold">{item.card.info.name}</div>
                        <div className="text-sm">{item.card.info.description}</div>
                        <div className="text-sm">Price: ₹{item.card.info.price/100}</div>
                    </div>
                    <div className="w-3/12 ">
                        <button className="bg-green-500 text-white px-2 py-1 rounded-md absolute ml-2 mt-30 ml-10 cursor-pointer" onClick={() => handleAddItem(item)}>Add +</button>
                        <img className="h-36 w-full" src={ITEM_IMG_CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default ItemList