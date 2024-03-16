import React from 'react';
import InvoiceResults from './InvoiceResults'; // Adjust the import path if necessary
import CreateInvoiceButton from './CreateInvoiceButton';

const IndexPage = () => {
  return (
    <div>
        <CreateInvoiceButton />
      <h1>Invoice Page</h1>
      <InvoiceResults />
      {/* You can add more content here, like a link to the sign-up page */}
    </div>
  );
};

export default IndexPage;
