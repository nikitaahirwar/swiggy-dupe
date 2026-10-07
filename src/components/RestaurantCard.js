import { IMG_CDN_URL } from "../utils/constants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
    const { loggedInUser } = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant.info;
    return (
        <div data-testid="restaurant-card" className="w-[250px] h-[380px] p-2 m-2 shadow-lg bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="border border-gray-400 rounded w-full h-50" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="restaurant"/>
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <p className="py-1">{cuisines.join(", ")}</p>
            <p className="py-1">Rating: {avgRating}</p>
            <p className="py-1">User: {loggedInUser}</p>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="bg-black text-white p-2 rounded absolute">Promoted</label>
                <RestaurantCard {...props}/>
            </div>

        )
    }
}

export default RestaurantCard