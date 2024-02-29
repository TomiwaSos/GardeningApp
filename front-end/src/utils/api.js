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
        localStorage.setItem('authToken', data.csrf_token); // Adjust based on actual response
        localStorage.setItem('isAuthenticated', 'true');
        return true;
      } else {
      // Handle non-OK responses here, before calling response.json()

      return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Function to perform the login operation
export const registerUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/users', {
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
      return true;
    } else {
    // Handle non-OK responses here, before calling response.json()
    const data = await response.json();
    return data;
    }
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};