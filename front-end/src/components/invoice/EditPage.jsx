import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { updateInvoice, getInvoice } from '../../utils/api.js';

const UpdateInvoiceForm = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const [invoice, setInvoice] = useState(''); // State to store the invoice data
  const [amount_due, setAmountDue] = useState('invoice.amount_due'); // State to store the amount_due input
  const [due_date, setDueDate] = useState(''); // State to store the due_date input
  const [payment_status, setPaymentStatus] = useState(''); // State to store the payment_status input
  const [client_id, setClientId] = useState(''); // State to store the client_id input
  const [error, setError] = useState(''); // State to store any error message

  useEffect(() => {
    const fetchInvoice = async () => {
      const response = await getInvoice(id);
      setInvoice(response);
    };

    fetchInvoice();
  }, [id]);

  useEffect(() => {
    setAmountDue(invoice.amount_due || '');
    setDueDate(invoice.due_date || '');
    setPaymentStatus(invoice.payment_status || '');
    setClientId(invoice.client_id || '');
  }, [invoice]);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setError(''); // Reset error message

    const response = await updateInvoice(id, amount_due, due_date, payment_status, client_id); // Use the registerUser function
    
    if (response === true) {
      navigate('/invoice');
    } else if (response === false) {
      setError('Failed to update. Please try again.');
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
};

export default UpdateInvoiceForm;