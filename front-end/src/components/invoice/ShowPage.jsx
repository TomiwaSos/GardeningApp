import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceUpdateButton from './UpdateButton.jsx';
import InvoiceDeleteButton from './DeleteButton.jsx';
import { getInvoice } from '../../utils/api.js';


const InvoiceHomePage = () => {
  let { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  
  useEffect(() => {
    const fetchInvoice = async () => {
      const response = await getInvoice(id);
      // const data = await response.json();
      setInvoice(response);
    };
    fetchInvoice();
  }, [id]);

  if (invoice === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Invoice {id}</h2>
      <p>Amount Due: {invoice.amount_due}</p>
      <p>Due Date: {invoice.due_date}</p>
      <p>Payment Status: {invoice.payment_status}</p>
      <p>Client ID: {invoice.client_id}</p>
      <p>Created At: {invoice.created_at}</p>
      <InvoiceUpdateButton id={id} />
      <InvoiceDeleteButton id={id} />
    </div>
  );
};

export default InvoiceHomePage;
