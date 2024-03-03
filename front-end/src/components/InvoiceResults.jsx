import React, { useState, useEffect } from 'react';
import { getInvoices } from '../utils/api.js';

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

  // var printable_invoies = ''
  // console.log(invoices)
  // for (let i = 0; i < invoices.length; i++) {
  //   printable_invoies += 'id :' + invoices[i].id +', amount due :' + invoices[i].amount_due +', due date:' + invoices[i].due_date +', client id:' + invoices[i].client_id+', payment status:' + invoices[i].payment_status+', created at:' + invoices[i].created_at
  // }

  return (
    <div>
      <h2>Invoice Results</h2>
      {invoices && invoices.length > 0 ? (
        <div>
          {invoices.map((invoice) => (
            <p key={invoice.id}>
              id: {invoice.id}, amount due: {invoice.amount_due}, due date: {invoice.due_date}, 
              client id: {invoice.client_id}, payment status: {invoice.payment_status}, 
              created at: {invoice.created_at}
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