import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateJobButton = () => {
  const navigate = useNavigate(); 
  
  // Function to handle form submission
  const handleClick = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate('/job/create');
  };
  
  return (
    <button onClick={handleClick}>
    Create Job
    </button>
  );
}

export default CreateJobButton;