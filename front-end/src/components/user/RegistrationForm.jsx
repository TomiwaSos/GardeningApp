import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/api.js'; // Import the registerUser function

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // State to store the email input
  const [password, setPassword] = useState(''); // State to store the password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State to store the password input
  const [error, setError] = useState(''); // State to store any error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(''); // Reset error message
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const response = await registerUser(email, password); // Use the registerUser function
    if (response === true) {
      navigate('/login');
    } else if (response === false) {
      setError('Failed to register. Please try again.');
    } else {
      var errors = ""
      for (let i = 0; i < response.errors.length; i++) {
        errors += response.errors[i] + ", ";
      }
      setError(errors);
    }
  };

  // Render the registration form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="confirm password">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;