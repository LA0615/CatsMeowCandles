

import {jwtDecode} from 'jwt-decode';

// Set token in local storage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Remove token from local storage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Check if the user is authenticated
export const isAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    // Check if token is expired

    if (decodedToken.exp < currentTime) {
      removeToken(); // Token is expired, remove it
      return false;
    }
    return true;
  } catch (error) {
    console.error('Invalid token:', error);
    removeToken(); // Invalid token, remove it
    return false;
  }
};

// Get the authenticated user's name
export const getUserName = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    return `${decoded.firstName} ${decoded.lastName}`;
  } catch (error) {
    return null;
  }
};