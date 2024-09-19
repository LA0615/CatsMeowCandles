//TO DO:
//ADD USER PROFILE INFO 
//ADD FAVORITES LIST 
//ADD MY ORDERS AND PAST ORDERS 

// import { useContext, useEffect, useState } from "react";
// import { useNavigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../utils/AuthContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./User.css";
// import Sidebar from "./Sidebar";

// const User = () => {
//   const navigate = useNavigate();
//   const { authToken, user } = useContext(AuthContext);
//   const [sidebarActive, setSidebarActive] = useState(false);

//   useEffect(() => {
//     // Redirect to home if no user is authenticated
//     if (!authToken || !user) {
//       navigate("/");
//     }
//   }, [authToken, user, navigate]);

//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

//   return (
//     <div className="user-page">
//       <button className="sidebar-toggle" onClick={toggleSidebar}>
//         ☰
//       </button>
//       <Sidebar className={sidebarActive ? "active" : ""} />
//       <div className={`content ${sidebarActive ? "active" : ""}`}>
//         <h1>Welcome, {user?.name}</h1>
//         <Outlet /> {/* Render child routes here */}
//       </div>
//     </div>
//   );
// };

// export default User;

import { useContext, useEffect, } from "react";
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
        <div className="content active">
          <h1>Welcome, {user?.name}</h1>
          <Outlet /> {/* Render child routes here */}
        </div>
      </div>
    );
  };
  
  export default User;