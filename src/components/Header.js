import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js"

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between p-4 shadow-lg bg-blue-100">
            <div>
                <img className="w-[60px]" src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png' alt="food logo"/>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-4 text-lg font-semibold text-orange-400">
                    <li>{onlineStatus ? 'Online' : 'Offline 🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header