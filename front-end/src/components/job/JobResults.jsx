import React, { useState, useEffect } from 'react';
import { getJobs } from '../../utils/api.js';
import JobShowButton from './ShowButton.jsx';

const JobResults = () => {
  const [jobs, setJobs] = useState(null); // use state is used to set a variable that is expected to change 

  useEffect(() => { // use Effect is used to fetch data
    const fetchJobs = async () => {
      const fetchedJobs = await getJobs();
      setJobs(fetchedJobs);
    };
    fetchJobs();
  }, []);  // Empty dependency array means this effect runs once after initial render

  if (jobs === null) {
    return <div>Loading...</div>; // Show loading state if invoices is still in default state 
  }

  return (
    <div>
      <h2>Jobs Results</h2>
      {jobs && jobs.length > 0 ? (
        <div>
          {jobs.map((job) => (
            <p key={job.id}>
              description: {job.description}, data: {job.date}, location: {job.location}, 
              client id: {job.client_id} <JobShowButton id={job.id} />
            </p>
          ))}
        </div>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};


export default JobResults;