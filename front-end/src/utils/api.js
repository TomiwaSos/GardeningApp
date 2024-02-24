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
     console.log(response.ok)
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        // Store the authentication token in localStorage (or consider using sessionStorage)
        localStorage.setItem('authToken', data.csrf_token); // Adjust based on actual response
        localStorage.setItem('isAuthenticated', 'true');
        return true;
      } else {
      // Handle non-OK responses here, before calling response.json()
      console.log('Response not OK, status:', response.status);
      return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
