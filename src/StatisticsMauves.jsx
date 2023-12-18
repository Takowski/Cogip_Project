import React, { useState, useEffect } from 'react';

const StatisticsMauves = () => {
  const [totalInvoices, setTotalInvoices] = useState(0);
  const [totalContacts, setTotalContacts] = useState(0);
  const [totalCompanies, setTotalCompanies] = useState(0);

  useEffect(() => {
    fetch('https://api-cogip-329f9c72c66d.herokuapp.com/api/invoices')
      .then(response => response.json())
      .then(data => {
        console.log('invoices data:', data);
        setTotalInvoices(data.data.length);
      });
  
    fetch('https://api-cogip-329f9c72c66d.herokuapp.com/api/contacts')
      .then(response => response.json())
      .then(data => {
        console.log('contacts data:', data);
        setTotalContacts(data.data.length);
      });
  
    fetch('https://api-cogip-329f9c72c66d.herokuapp.com/api/companies')
      .then(response => response.json())
      .then(data => {
        console.log('companies data:', data);
        setTotalCompanies(data.data.length);
      });
  }, []);
  console.log('totalInvoices:', totalInvoices);
  console.log('totalContacts:', totalContacts);
  console.log('totalCompanies:', totalCompanies);

  return(
    <> 
    <h2>Statistics</h2>
    <hr />
    <div className='flex justify-center p-5 bg-white m-auto rounded-lg box-border'>
      <div style={{ backgroundColor: '#4D4CAC' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white'>{totalInvoices} invoices</p></div>
      <div style={{ backgroundColor: '#9698D6' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white'>{totalContacts} contacts</p></div> 
      <div style={{ backgroundColor: '#FF808B' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white'>{totalCompanies} companies</p></div>
    </div>
    
    </>
    
  );
};

export default StatisticsMauves;