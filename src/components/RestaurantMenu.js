import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL, RESTAURANT_IMAGE } from "../utils/constants.js";
import restaurantMenuData from "../utils/restaurantMenuData.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [showIndex, setShowIndex] = useState(0);
    console.log('restaurant id', id);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        // not getting datat from api, so using static data from restaurantMenuData.js
        // const data = await fetch(`${FETCH_MENU_URL}${id}&catalog_qa=undefined&submitAction=ENTER`);
        // console.log('status', data.status);
        // console.log('ok', data.ok);
        // const text = await data.text();
        // console.log('menu text data', text);
    }

    const { name, cloudinaryImageId, cuisines, costForTwoMessage, avgRating } = restaurantMenuData.cards[0].card.card.info;
    const categories = restaurantMenuData.cards[1].groupedCard.cardGroupMap.REGULAR.cards.filter(card => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log('categories', categories);

    return (
        <div className="w-6/12 mx-auto my-4">
            <div className="menu-details">
                <div className="font-bold text-3xl mb-5">
                    {name}
                </div>
                <div>
                    <img className='rounded-xl' src={`${RESTAURANT_IMAGE}${cloudinaryImageId}`} alt={name} />
                </div>
                <div className="font-semibold text-lg my-3">
                    <span>Ratings: {avgRating}</span>
                    <span> {costForTwoMessage}</span>
                </div>
                <div className="font-medium text-md my-2 mb-4">
                    {cuisines.join(", ")}
                </div>
            </div>
            <div>
                {categories.map((item, index)=> (
                    <RestaurantCategory
                        key={index}
                        category={item.card.card}
                        showItem={showIndex === index}
                        setShowIndex={() => {
                            setShowIndex(prevIndex =>
                                prevIndex === index ? null : index
                            );
                        }}
                    />
                ))}
            </div>
            
        </div>    
    )
}

export default RestaurantMenu