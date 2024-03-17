import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../utils/api.js';

const JobCreation = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [client_id, setClientId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');

    const response = await createJob(description, date, location, client_id);

    if (response.id) {
      navigate('/job');
    } else {
      setError('Failed to create job. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="client_id">Client ID</label>
        <input
          type="integer"
          id="client_id"
          value={client_id}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Create Job</button>
    </form>
  );
}

export default JobCreation;

