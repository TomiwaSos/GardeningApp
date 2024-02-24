import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(''); // State to store the email input
  const [password, setPassword] = useState(''); // State to store the password input
  const [error, setError] = useState(''); // State to store any error message
  const { login } = useAuth(); // Destructure the login function from the context

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(''); // Reset error message
    // Invoke the onLogin function passed as a prop, providing email and password
    const success = await login(email, password);
    if (success) {
      navigate('/home');
    } else {
      // Update the error state if login is unsuccessful
      setError('Failed to login. Please check your credentials and try again.');
    }
  };

  // Render the login form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          required
        />
      </div>
      {error && <p>{error}</p>} // Display any error message
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
