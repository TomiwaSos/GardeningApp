import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem('authToken', ''); // Adjust based on actual response
    localStorage.setItem('isAuthenticated', 'falase');
    navigate('/login');
  };

  return (
    <button onClick={handleClick}>
      Log out
    </button>
  );
};

export default LogoutButton;
