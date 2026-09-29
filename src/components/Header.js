import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png' alt="food logo"/>
            </div>
            <div className="nav-items">
                <ul>
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