import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
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
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact Us</li>
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
