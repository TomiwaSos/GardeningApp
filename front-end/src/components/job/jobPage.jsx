import React from 'react';
import JobResults from './JobResults';
import CreateJobButton from './CreateJobButton';

const JobPage = () => {
  return (
    <div>
    <CreateJobButton />
    <h1>Job Page</h1>
    <JobResults />
    </div>
  );
}

export default JobPage;