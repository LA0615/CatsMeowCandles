import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

const Sidebar = ({ className, onClick }) => {
  return (
    <div className={`sidebar ${className}`}>
      <NavLink
        to="favorites"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        My Favorites
      </NavLink>
      <NavLink
        to="current-orders"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Current Orders
      </NavLink>
      <NavLink
        to="past-orders"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Past Orders
      </NavLink>
      <NavLink
        to="account-info"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Account Info
      </NavLink>
      <NavLink
        to="return-policy"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Return Policy
      </NavLink>
      <NavLink
        to="candle-care"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={onClick}
      >
        Candle Care
      </NavLink>
    </div>
  );
};
Sidebar.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Sidebar;
