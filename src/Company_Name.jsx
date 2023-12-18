import React from 'react';
import './App.css';

function Company_Name({data}) {

  return (
    <div>
      <h2 className='mt-6 mb-5 ml-10 text-3xl font-bold yellow-bg'>{data.company_name}</h2>
      <p className='mt-6 ml-10 text-xs font-bold leading-4'>Name: {data.company_name}</p>
      <p className='ml-10 text-xs font-bold leading-4'>TVA: {data.tva}</p>
      <p className='ml-10 text-xs font-bold leading-4'>Country: {data.country}</p>
      <p className='ml-10 text-xs font-bold leading-4'>Type: {data.type_name}</p>
      <p className='mt-6 border border-solid'></p>
    </div>
  );
}

export default Company_Name;
