import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobUpdateButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    navigate(`/job/${id}/update`);
  }

  return (
    <button onClick={handleClick}>
      Edit Job
    </button>
  );
};

export default JobUpdateButton;
