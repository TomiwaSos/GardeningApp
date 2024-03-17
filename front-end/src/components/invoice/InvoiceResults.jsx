import React, { useState, useEffect } from 'react';
import { getInvoices } from '../../utils/api.js';
import InvoiceShowButton from './ShowButton.jsx';

const InvoiceResults = () => {
  const [invoices, setInvoices] = useState(null); // use state is used to set a variable that is expected to change 

  useEffect(() => { // use Effect is used to fetch data
    const fetchInvoices = async () => {
      const fetchedInvoices = await getInvoices();
      setInvoices(fetchedInvoices);
    };
    fetchInvoices();
  }, []);  // Empty dependency array means this effect runs once after initial render

  if (invoices === null) {
    return <div>Loading...</div>; // Show loading state if invoices is still in default state 
  }

  return (
    <div>
      <h2>Invoice Results</h2>
      {invoices && invoices.length > 0 ? (
        <div>
          {invoices.map((invoice) => (
            <p key={invoice.id}>
              id: {invoice.id}, amount due: {invoice.amount_due}, due date: {invoice.due_date}, 
              client id: {invoice.client_id}, payment status: {invoice.payment_status}, 
              created at: {invoice.created_at}, <InvoiceShowButton id={invoice.id} />
            </p>
          ))}
        </div>
      ) : (
        <p>No invoices found.</p>
      )}
    </div>
  );
};


export default InvoiceResults;