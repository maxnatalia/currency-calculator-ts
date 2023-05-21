import { NavLink } from "react-router-dom";
import moneyIcon from "./money-icon.png";

const Navigation = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src={moneyIcon} alt="money icon" />
      <p className="nav__title">Currency Calculator</p>
      <div className="nav__box">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__box-link--active" : "nav__box-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav__box-link--active" : "nav__box-link"
          }
        >
          About Author
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
