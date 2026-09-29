import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import RestaurantCardShimmer from "./RestaurantCardShimmer.js";
import { FETCH_RESTAURANTS_URL } from "../utils/constants.js";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const json = await data.json();
        console.log('json data', json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="body">
            <div className="filters">
                <div className="search">
                    <input className="search-input" type="text" placeholder="Search for restaurants" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <input className="search-button" type="button" value="Search" onClick={() => {
                        const filtered = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filtered);
                    }}/>
                </div>
                <div className="top-rated">
                    <input className="top-rated-button" type="button" value="Top Rated" onClick={() => {
                        const topRated = restaurants.filter(restaurant => restaurant.info.avgRating > 4.5);
                        setFilteredRestaurants(topRated);
                    }}/>
                </div>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.length === 0 ? (
                        <RestaurantCardShimmer />
                    ) : (
                    filteredRestaurants.map(restaurant => (
                        <RestaurantCard
                            key={restaurant.info.id} 
                            restaurant={restaurant}
                        />
                    )))
                }
            </div>
        </div>
    )
}
export default Body