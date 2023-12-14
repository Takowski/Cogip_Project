import React from "react";

function Header_Cogip() {
        
  return (
    <>
  
      <div className="flex flex-wrap md:flex-nowrap flex-row justify-between items-center p-5 pt-20 m-auto  bg-yellow-300 md:flex-row"  >
          <h2 className='ml-16 font-bold text-4xl'>COGIP</h2>
        <div className="flex flex-wrap md:flex-nowrap">
          <p className='font-bold px-4 text-2xl'>Home</p>
          <p className="font-bold px-4 text-2xl">Invoices</p>
          <p className='font-bold px-4 text-2xl'>Companies</p>
          <p className='font-bold px-4 text-2xl'>Contacts</p>
        </div>

        <div className="flex flex-row items-center md:flex-row">
          <p className='mt-1.5 ml-2 font-bold text-2xl  bg-white rounded-md px-2 py-1'>Sign up</p>
          <p className='mt-1.5 ml-8 mr-16 font-bold text-2xl'>Login</p>
        </div>
      </div>
 
      
    </>

  );
}

export default Header_Cogip;
