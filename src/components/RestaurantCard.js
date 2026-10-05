import { IMG_CDN_URL } from "../utils/constants.js";
const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant.info;
    return (
        <div className="w-[250px] h-[380px] p-2 m-2 shadow-lg bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="border border-gray-400 rounded w-full h-50" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="restaurant"/>
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <p className="py-1">{cuisines.join(", ")}</p>
            <p className="py-1">Rating: {avgRating}</p>
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