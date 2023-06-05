import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <span className="nav__logo">💵</span>
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
