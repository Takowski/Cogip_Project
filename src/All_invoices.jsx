import React from 'react';
import invoicesData from './all_invoices.json';
import './App.css';

const AllInvoices = () => {
  const columns = [
    {name: 'Invoice Number', selector: 'invoice_number', sortable: true, },
    {name: 'Due Date', selector: 'due_dates', sortable: true, },
    {name: 'Company', selector: 'company', sortable: true, },
    {name: 'Created at', selector: 'created_at', sortable: true, },
  ];

  const sortedInvoices = [...invoicesData].sort((a, b) => new Date(b.due_dates) - new Date(a.due_dates)); // on trie les invoices par date de due date

  const data = sortedInvoices.map((invoice) => {
    return columns.reduce((acc, column) => {
      acc[column.selector] = invoice[column.selector];
      return acc;
    }, {});
  });

  return (
    <>
      <h2 className="text-4xl font-extrabold dark:text-white">All Invoices</h2>
      <div className='yellowSubtitle'></div>
      <input className='searchBarCompany' type="text" placeholder='Search company' />
      <div className='table-container'>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedInvoices.map((invoice, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td key={index}>{invoice[column.selector]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </>
  );
};

export default AllInvoices;
