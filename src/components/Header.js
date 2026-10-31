import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Logout failed:", error);
    }
  };

  return (
    <div className="flex justify-between p-1 md:p-4 shadow-lg bg-blue-100 fixed top-0 w-screen z-1">
      <div>
        <img
          className="w-15"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="food logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-2 md:gap-4 text-sm md:text-lg font-semibold text-orange-400">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="hidden md:inline-block">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart({cartItems.length} items)</Link>
          </li>
          <li>
            <button className="cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
