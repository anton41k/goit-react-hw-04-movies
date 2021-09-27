import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav_bar}>
      <NavLink
        exact
        to="/"
        className={css.navLink}
        activeClassName={css.navLink_active}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={css.navLink}
        activeClassName={css.navLink_active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
