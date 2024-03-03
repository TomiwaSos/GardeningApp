import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/api.js'; // Import the registerUser function


const InvoiceCreation= () => {
  const navigate = useNavigate();
  const [amountDue, setAmountDue] = useState(''); // State to store the amount_due input
  const [dueDate, setDueDate] = useState(''); // State to store the due_date input
  const [paymentStatus, setPaymentStatus] = useState(''); // State to store the payment_status input
  const [clientId, setClientId] = useState(''); // State to store the client_id input
  const [error, setError] = useState(''); // State to store any error message


  const handleSubmit = async (event) => {
    event.preventDefault();

  }
}

export default InvoiceCreation;