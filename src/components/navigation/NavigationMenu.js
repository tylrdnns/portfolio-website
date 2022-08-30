import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <section className="menu-links">
      <NavLink
        to="/"
        className=" gray-text "
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/about"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#daa520",
              }
            : {}
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#daa520",
              }
            : {}
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className="gray-text"
        onClick={() => {
          props.ResetLocation();
          props.HideMenu();
        }}
        style={({ isActive }) =>
          isActive
            ? {
                textDecoration: "none",
                color: "#daa520",
              }
            : {}
        }
      >
        Contact
      </NavLink>
    </section>
  );
};

export default NavigationMenu;
