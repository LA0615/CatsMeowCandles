import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import Sidebar from "./Sidebar";

const User = () => {
  const navigate = useNavigate();
  const { authToken, user } = useContext(AuthContext);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Redirect to home if no user is authenticated
    if (!authToken || !user) {
      navigate("/");
    }
  }, [authToken, user, navigate]);

  const handleSidebarClick = () => {
    setShowAnimation(false); //Hide animation after user clicks a sidebar link
  };

  const handleShopRedirect = () => {
    navigate("/shop"); // Redirect to the shop page when the button is clicked
  };

  return (
    <div className="user-page">
      <Sidebar className="sidebar" onClick={handleSidebarClick}/>
      <div className="content">
        <h1>
          Welcome,{" "}
          {user
            ? `${user.firstName || "Guest"} ${user.lastName || ""}`
            : "Guest"}
        </h1>
        {/* Animation Section to remind user to add favorites */}
        {showAnimation && (
          <div className="favorite-animation">
            <p className="animation-text">
              ✨ Explore our products and add your favorites! ✨
            </p>
            <button className="explore-btn" onClick={handleShopRedirect}>
              Shop Now
            </button>
          </div>
        )}
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
};


export default User;
