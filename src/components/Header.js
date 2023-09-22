import { LOGO_URL } from "../../utils/constant";
const Header = () => {
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
        </div>
      </div>
    </header>
  );
};
export default Header;
