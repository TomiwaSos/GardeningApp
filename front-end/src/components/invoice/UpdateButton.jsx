import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceUpdateButton = ({ id }) => {
  const navigate = useNavigate(); 

  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate(`/invoice/${id}/update`);
  };

  return (
    <button onClick={handleClick}>
      Edit Invoice
    </button>
  );
};

export default InvoiceUpdateButton;
