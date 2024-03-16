import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInvoiece } from '../../utils/api.js'; // Import the registerUser function


const InvoiceCreation= () => {
  const navigate = useNavigate();
  const [amount_due, setAmountDue] = useState(''); // State to store the amount_due input
  const [due_date, setDueDate] = useState(''); // State to store the due_date input
  const [payment_status, setPaymentStatus] = useState(''); // State to store the payment_status input
  const [client_id, setClientId] = useState(''); // State to store the client_id input
  const [error, setError] = useState(''); // State to store any error message


  const handleSubmit = async (event) => {
    event.preventDefault();

    setError('');

    const response = await createInvoiece(amount_due, due_date, payment_status, client_id);
     
    if (response.id) {
      navigate('/invoice');
    } else {
      setError('Failed to create invoice. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount_due">Amount Due</label>
        <input
          type="float"
          id="amount_due"
          value={amount_due}
          onChange={(e) => setAmountDue(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="due_date">Due Date</label>
        <input
          type="date"
          id="due_date"
          value={due_date}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="payment_status">Payment Status</label>
        <input
          type="integer"
          id="payment_status"
          value={payment_status}
          onChange={(e) => setPaymentStatus(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="client_id">Client</label>
        <input
          type="integer"
          id="client_id"
          value={client_id}
          onChange={(e) => setClientId(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default InvoiceCreation;