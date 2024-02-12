import React, { createContext, useContext, useState } from 'react';
import { loginUser } from '../utils/api'; // Import the loginUser function

const AuthContext = createContext(); // Create a new context

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component that wraps your app and provides auth state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to store authentication status

  // Function to log in the user
  const login = async (email, password) => {
    const success = await loginUser(email, password); // Use the loginUser function
    setIsAuthenticated(success); // Update the authentication status based on success
    return success;
  };

  // Function to log out the user
  const logout = () => {
    localStorage.removeItem('authToken'); // Remove the token from storage
    setIsAuthenticated(false); // Update the authentication status
  };

  // Provide the authentication state and functions to the component tree
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
