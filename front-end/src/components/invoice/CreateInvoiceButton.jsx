import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate('/invoice/create');
  };

  return (
    <button onClick={handleClick}>
      Create Invoice
    </button>
  );
};

export default LogoutButton;
