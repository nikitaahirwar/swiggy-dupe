import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "../utils/constants.js";

const RestaurantMenu = () => {
    const {id} = useParams();
    console.log('restaurant id', id);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch(FETCH_MENU_URL + id);
        console.log('status', data.status);
        console.log('ok', data.ok);
        const text = await data.text();
        console.log('menu text data', text);
    }

    return (
        <div className="menu">
            <div className="menu-details">
                <div className="menu-name">
                    name
                </div>
                <div className="menu-price">
                </div>
                <div className="menu-rating">
                </div>
                <div className="menu-description">
                </div>
            </div>
            <div className="menu-image">
            </div>
        </div>    
    )
}

export default RestaurantMenu