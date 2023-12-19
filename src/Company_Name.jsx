import React from 'react';
import './App.css';

function Company_Name({data}) {

  return (
    <>
      <style jsx>{`
  .underline-after {
      position: relative;
  }

  .underline-after::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
      left: 15px;
      width: 100%;
      height: 20px; 
      background-color: #FCD34D;
      z-index: -1;
  }
  `}</style>
      <div className="flex flex-wrap justify-around items-center w-3/4  mt-16">
        <div className="text-left"> 
          <h2 className="text-left text-4xl underline-after">{data.company_name}</h2>
          <p className="text-left mt-3 text-lg"><strong>Name</strong>: {data.company_name}</p>
          <p className='text-left text-lg'><strong>TVA</strong>: {data.tva}</p>
          <p className='text-left text-lg'><strong>Country</strong>: {data.country}</p>
          <p className='text-left text-lg'><strong>Type</strong>: {data.type_name}</p>
        </div>
      </div>
    </>

  );
}

export default Company_Name;

