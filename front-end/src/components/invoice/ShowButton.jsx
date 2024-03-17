import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceShowButton = ({ id }) => {
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate(`/invoice/${id}`);
  };

  return (
    <button onClick={handleClick}>
      Show Invoice
    </button>
  );
};

export default InvoiceShowButton;
