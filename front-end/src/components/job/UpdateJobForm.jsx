import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updateJob, getJob } from '../../utils/api.js';

const UpdateJobForm = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const [job, setJob] = useState(''); 
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [client_id, setClientId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      const response = await getJob(id);
      setJob(response);
    };

    fetchJob();
  }, [id]);

  useEffect(() => {
    setDescription(job.description || '');
    setDate(job.date || '');
    setLocation(job.location || '');
    setClientId(job.client_id || '');
  }, [job]);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(''); 

    const response = await updateJob(id, description, date, location, client_id); 
    if (response === true) {
      navigate('/job');
    } else if (response === false) {
      setError('Failed to update. Please try again.');
    } else {
      var errors = ""
      for (let i = 0; i < response.errors.length; i++) {
        errors += response.errors[i] + ", ";
      }
      setError(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="descruotuib"
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
      <label htmlFor="client_id">Client</label>
      <input
        type="integer"
        id="client_id"
        value={client_id}
        onChange={(e) => setClientId(e.target.value)}
        required
      />
    </div>
    {error && <p>{error}</p>}
    <button type="submit">Submit</button>
  </form>
);
};

export default UpdateJobForm;