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

export const getInvoices = async () => {
  try {
    const response = await fetch('http://localhost:3001/invoices', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
    
    });

    if (response.ok) {
      const data = await response.json();
      return data.array;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
};

export const createInvoice = async (amount_due, due_date, payment_status, client_id) => {
  try {
    const response = await fetch('http://localhost:3001/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
      body: JSON.stringify({
        amount_due,
        due_date,
        payment_status,
        client_id
      }),
    
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
}


export const getInvoice = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
    
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
}

export const updateInvoice = async (id, amount_due, due_date, payment_status, client_id) => {
  try {
    const response = await fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
      body: JSON.stringify({
        amount_due,
        due_date,
        payment_status,
        client_id
      }),
    
    });
    const data = await response.json();
    if (response.ok) {
      if (data.id) {
        return true;
      } else {
        return data;
      }
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
}

export const deleteInvoice = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
    
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
}

export const getJobs = async () => {
  try {
    const response = await fetch (`http://localhost:3001/jobs`, {
      mehtod: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Jobs error:', error);
    return false;
  }
}

export const getJob = async (id) => {
  try {
    const response = await fetch (`http://localhost:3001/jobs/${id}`, {
      mehtod: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Jobs error:', error);
    return false;
  }
}

export const createJob = async (description, date, location, client_id) => {
  try {
    const response = await fetch('http://localhost:3001/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
      body: JSON.stringify({
        description,
        date,
        location,
        client_id
      }),
    
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Jobs error:', error);
    return false;
  }
}

export const deleteJob = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/invoices/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
    
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.error('Invoices error:', error);
    return false;
  }
}

export const updateJob = async (id, description, date, location, client_id) => {
  try {
    const response = await fetch(`http://localhost:3001/jobs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include if your backend expects credentials
      body: JSON.stringify({
        id,
        description,
        date,
        location,
        client_id
      }),
    
    });
    const data = await response.json();
    if (response.ok) {
      if (data.id) {
        return true;
      } else {
        return data;
      }
    }
  } catch (error) {
    console.error('Jobs error:', error);
    return false;
  }
}