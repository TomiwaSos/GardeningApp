import Reach, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from '../../utils/api.js';
import JobDeleteButton from './DeleteJobButton.jsx';
import JobUpdateButton from './UpdateButton.jsx';

const JobShowPage = () => {
  let { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await getJob(id);
      setJob(response);
    };
    fetchJob();
  }, [id]);

  if (job === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Job {id}</h2>
      <p>Description: {job.description}</p>
      <p>Date: {job.date}</p>
      <p>Location: {job.location}</p>
      <p>Client ID: {job.client_id}</p>
      <JobDeleteButton id={id} />
      <JobUpdateButton id={id} />
    </div>
  )
}

export default JobShowPage;