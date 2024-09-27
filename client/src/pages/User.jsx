

import { useContext, useEffect, useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";
import {getUserName} from "../utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css"; 
import Sidebar from "./Sidebar";

const User = () => {
  const navigate = useNavigate();
  const { authToken, user } = useContext(AuthContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Redirect to home if no user is authenticated
    if (!authToken || !user) {
      navigate("/");
    } else {
      const name = getUserName();
      setUserName(name);
    }
    
  }, [authToken, user, navigate]);

    return (
      <div className="user-page">
        <Sidebar className="active" />
        <div className="content">
          <h1>Welcome, {userName}</h1>
          <Outlet /> {/* Render child routes here */}
        </div>
      </div>
    );
  };
  
  export default User;

