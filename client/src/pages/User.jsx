import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import Sidebar from "./Sidebar";

const User = () => {
  const navigate = useNavigate();
  const { authToken, user } = useContext(AuthContext);

  useEffect(() => {
    // Redirect to home if no user is authenticated
    if (!authToken || !user) {
      navigate("/");
    }
  }, [authToken, user, navigate]);

  return (
    <div className="user-page">
      <Sidebar className="active" />
      <div className="content">
        <h1>
          Welcome,{" "}
          {user
            ? `${user.firstName || "Guest"} ${user.lastName || ""}`
            : "Guest"}
        </h1>
        <Outlet /> {/* Render child routes here */}
      </div>
    </div>
  );
};

export default User;
