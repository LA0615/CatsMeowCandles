import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Sidebar = ({ className }) => {
  return (
    <div className={`sidebar ${className}`}>
      <NavLink
        to="favorites"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Favorites
      </NavLink>
      <NavLink
        to="current-orders"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Current Orders
      </NavLink>
      <NavLink
        to="past-orders"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Past Orders
      </NavLink>
      <NavLink
        to="account-info"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Account Info
      </NavLink>
      <NavLink
        to="return-policy"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Return Policy
      </NavLink>
      <NavLink
        to="candle-care"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Candle Care
      </NavLink>
    </div>
  );
};
Sidebar.propTypes = {
  className: PropTypes.string,
};


export default Sidebar;
