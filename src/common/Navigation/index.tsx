import { NavLink } from "react-router-dom";
import { toAbout, toHome } from "../../routes";

const Navigation = () => {
  return (
    <nav className="nav">
      <span className="nav__logo">💵</span>
      <p className="nav__title">Currency Calculator</p>
      <div className="nav__box">
        <NavLink
          to={toHome()}
          className={({ isActive }) =>
            isActive ? "nav__boxLink nav__boxLink--active" : "nav__boxLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={toAbout()}
          className={({ isActive }) =>
            isActive ? "nav__boxLink nav__boxLink--active" : "nav__boxLink"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
