import { IMG_CDN_URL } from "../utils/constants.js";
const RestaurantCard = (props) => {
    console.log('restaurant props', props.restaurant);
    const { cloudinaryImageId, name, cuisines, avgRating } = props.restaurant.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="restaurant"/>
            <h3 className="restaurant-name">{name}</h3>
            <p className="restaurant-cuisine">{cuisines.join(", ")}</p>
            <p className="restaurant-rating">Rating: {avgRating}</p>
        </div>
    )
}

export default RestaurantCard