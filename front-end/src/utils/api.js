// Function to perform the login operation
export const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include if your backend expects credentials
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        // Store the authentication token in localStorage (or consider using sessionStorage)
        localStorage.setItem('authToken', data.authToken); // Adjust based on actual response
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  