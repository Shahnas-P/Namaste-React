import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  console.log("Header component Rendered");
  useEffect(() => {
    console.log("UseEffect Worked!!");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="NO Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}> About Us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li></li>
          <button
            className="login-button"
            onClick={() => {
              btnNameReact === "LOGIN"
                ? setBtnNameReact("LOGOUT")
                : setBtnNameReact("LOGIN");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
