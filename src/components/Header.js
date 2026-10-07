import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"
import { useContext, useState } from "react";
import userContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const [loggedIn, setLoggedIn] = useState(true);
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between p-4 shadow-lg bg-blue-100 fixed top-0 w-full">
            <div>
                <img className="w-[60px]" src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png' alt="food logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-4 text-lg font-semibold text-orange-400">
                    <li>{onlineStatus ? 'Online' : 'Offline 🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="font-bold"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
                    <li>
                        <button onClick={() => setLoggedIn(!loggedIn)}>
                            {loggedIn ? 'Login' : 'Logout'}
                        </button>
                    </li>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header