import React from 'react';
import LogoutButton from './LogoutButton';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a protected page. You should only see this after logging in.</p>
      <div><LogoutButton /></div>
    </div>
  );
};

export default HomePage;
