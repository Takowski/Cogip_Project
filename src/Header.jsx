import React from "react";

function Header_Cogip() {
        
  return (
    <div className="flex flex-row justify-between bg-yellow-300 md:flex-row" >
      <h2 className='ml-5 font-bold text-m'>COGIP</h2>
      <div className="flex flex-row md:flex-row">
        <p className='mt-1.5 ml-6 font-bold text-2xs'>Home</p>
        <p className='mt-1.5 ml-2 font-bold text-2xs'>Invoices</p>
        <p className='mt-1.5 ml-2 font-bold text-2xs'>Companies</p>
        <p className='mt-1.5 ml-2 font-bold text-2xs'>Contacts</p>
      </div>

      <div className="flex flex-row md:flex-row">
        <p className='mt-1.5 ml-2 font-bold text-2xs mb-5 bg-white rounded px-1 py-1/2'>Sign up</p>
        <p className='mt-1.5 ml-2 mr-2 font-bold text-2xs'>Login</p>
      </div>
    </div>
  );
}

export default Header_Cogip;
