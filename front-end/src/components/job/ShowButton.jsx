import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobShowButton = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = async(event) => {
    event.preventDefault();
    navigate(`/job/${id}`);
  }

  return (
    <button onClick={handleClick}>
      Show Job
    </button>
    )
}

export default JobShowButton;