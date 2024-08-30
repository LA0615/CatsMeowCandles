//TO DO:
//CANDLE CARE CARD
//ADD RETURN POLICY
//ADD FAVORITES LIST
//ADD MY ORDERS AND PAST ORDERS


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Example: Remove token from localStorage
    navigate("/"); // Redirect to home page
  };
  useEffect(() => {
    // Any user-specific initialization can go here
  }, []);

  return (
    <>
      <main className="main-content">
        <h1>Welcome to your user page</h1>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </>
  );
};

export default User;
