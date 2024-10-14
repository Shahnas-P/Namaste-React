import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
//Importing selector hook to subscribe the store
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  const onlineStatus = useOnlineStatus()
  // console.log(onlineStatus);
  const {loggedInUser} = useContext(UserContext)
  
  //Subscribing to Store using a selector
  const cartItems = useSelector((store)=>store.cart.item)
// console.log(cartItems);

  useEffect(() => {
  }, [btnNameReact]);
  return (
    <div className="flex justify-between bg-amber-100 bg-blend-color">
      <div className="logo-container">
        <img className="w-24 h-28 " src={LOGO_URL} alt="NO Logo" />
      </div>
      <div className="nav-items">
        <ul  className="flex p-4 m-4 px-8 " >
          <li>Online Status : {onlineStatus?"✅":"🔴"}</li>
          <li>
            <Link className="px-4" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="px-4" to={"/about-us"}> About Us</Link>
          </li>
          <li>
            <Link className="px-4" to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>
            <Link className="px-4" to={"/grocery"}  >Grocery</Link>
          </li>
          <li className="text-xl font-bold"> 
          <Link className="px-4" to={"/cart"}  >  Cart ({cartItems.length} items)</Link>

          
            </li>
          <button
            className="px-4 ml-4 px-2 border border-slate-300 px-1 rounded-sm bg-yellow-200 "
            onClick={() => {
              btnNameReact === "LOGIN"
                ? setBtnNameReact("LOGOUT")
                : setBtnNameReact("LOGIN");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4">User Name : {loggedInUser}</li>
        
        </ul>
      </div>
    </div>
  );
};

export default Header;
