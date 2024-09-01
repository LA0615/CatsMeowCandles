import { createContext, useState, useEffect } from "react";
import { setToken, removeToken, isAuth } from "../utils/auth";
import  {jwtDecode}  from "jwt-decode";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isAuth()) {
      setAuthToken(token);
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Error decoding token:", error);
        removeToken();
        setAuthToken(null);
        setUser(null);
      }
    }
  }, []); // Run once on mount

  const login = (token) => {
    setToken(token);
    setAuthToken(token);
    try {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    } catch (error) {
      console.error("Error decoding token:", error);
      removeToken();
      setAuthToken(null);
      setUser(null);
    }
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
