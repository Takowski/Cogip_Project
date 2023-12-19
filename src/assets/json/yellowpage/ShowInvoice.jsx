import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceDetails from './InvoiceDetails';

function ShowInvoice() {
  const [invoiceData, setInvoiceData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/invoices/${id}`)
      .then(response => response.json())
      .then(data => {
        setInvoiceData(data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [id]);

  return (
    <div>
      {invoiceData ? <InvoiceDetails data={invoiceData} /> : 'Loading...'}
    </div>
  );
}

export default ShowInvoice;