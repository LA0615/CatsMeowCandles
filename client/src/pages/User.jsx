//TO DO:
//CANDLE CARE CARD  maybe use card with links to download pdf of candle care tips either left or under return policy
//ADD RETURN POLICY maybe use accordion to show return policy left of page
//ADD FAVORITES LIST maybe at the bottom of page not too sure yet
//ADD MY ORDERS AND PAST ORDERS maybe use accordion to show past orders and present orders middle or top of page


import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

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
    <main className="main-content">
      <h1>Welcome To Your Page</h1>
    </main>
  );
};

export default User;
