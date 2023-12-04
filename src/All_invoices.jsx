import React from 'react';
import invoicesData from './all_invoices.json';

const AllInvoices = () => {
  // Assumons que toutes les factures ont les mêmes clés
  const columns = Object.keys(invoicesData[0]);

  // Trier les factures par due_dates
  const sortedInvoices = [...invoicesData].sort((a, b) => new Date(b.due_dates) - new Date(a.due_dates));

  return (
    <>
     <h2>All Invoices</h2>
    <table className="w-full text-sm text-left rtl:text-right text-neutral-950 dark:text-gray-400">
      <thead className='text-xs text-neutral-950 uppercase bg-yellow-300 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedInvoices.map((invoice, index) => (
          <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700' key={index}>
            {columns.map((column, index) => (
              <td key={index}>{invoice[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
   
  );
};

export default AllInvoices;