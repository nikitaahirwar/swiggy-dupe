import ItemList from "./ItemList";

const RestaurantCategory = ({category, showItem, setShowIndex}) => {
    return (
            <div className="border-b-2 border-gray-300 ">
                <div className="flex justify-between items-center py-2 my-2 rounded-md">
                    <h3 className="font-bold text-xl">{category.title}</h3>
                    <div className="cursor-pointer" onClick={() => setShowIndex()}>
                        🔽
                    </div>
                </div>
                <div>
                {showItem && <ItemList itemCards={category.itemCards} />}
                </div>
            </div>
    )
}

export default RestaurantCategory