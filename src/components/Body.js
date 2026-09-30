import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import RestaurantCardShimmer from "./RestaurantCardShimmer.js";
import { FETCH_RESTAURANTS_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

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

    if(!onlineStatus) return <h1>🔴 You are offline. Please check your internet connection.</h1>

    return (
        <div>
            <div className="flex justify-between p-4">
                <div>
                    <input className="border border-gray-300 rounded py-2 px-4 mr-2" type="text" placeholder="Search for restaurants" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" value="Search" onClick={() => {
                        const filtered = restaurants.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filtered);
                    }}/>
                </div>
                <div className="top-rated">
                    <input className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="button" value="Top Rated" onClick={() => {
                        const topRated = restaurants.filter(restaurant => restaurant.info.avgRating > 4.5);
                        setFilteredRestaurants(topRated);
                    }}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.length === 0 ? (
                        <RestaurantCardShimmer />
                    ) : (
                    filteredRestaurants.map(restaurant => (
                        <Link to={"restaurant-menu/"+ restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard
                                key={restaurant.info.id} 
                                restaurant={restaurant}
                            />
                        </Link>
                    )))
                }
            </div>
        </div>
    )
}
export default Body