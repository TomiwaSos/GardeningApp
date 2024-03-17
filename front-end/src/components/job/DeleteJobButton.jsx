import React from 'react';
import { deleteJob } from '../../utils/api.js';
import { useNavigate } from 'react-router-dom';

const InvoiceDeleteButton = ({ id }) => {
  const navigate = useNavigate();

  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    deleteJob(id);
    navigate(`/job`);
  };

  return (
    <button onClick={handleClick}>
      Delete Invoice
    </button>
  );
};

export default InvoiceDeleteButton;
