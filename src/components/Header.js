import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <header id="header">
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <img src={LOGO_URL} alt="logo" />
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>Service</li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="btn-box">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
