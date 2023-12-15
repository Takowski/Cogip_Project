import React from "react";

function Company_Contact_Show({data}) {
  return (
    <div>
      <h2 className='mt-6 mb-5 ml-10 text-2xl font-bold'>Contact people</h2>
      <div className="grid items-center w-2/3 grid-cols-2 gap-2 ml-10 mr-8">
        {data.contacts.map((contact, index) => (
          <div key={index} className='flex items-center p-2 space-x-4 rounded bg-gray-300/20'>
            <p className="text-xs font-bold ">{contact}</p>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-end p-2 rounded'>
        <img className="absolute object-cover w-12 h-12 top-62 " src="clipboard.jpg" alt="bg" />
      </div>
  
      <p className='mt-6 mb-6 border border-solid'></p>
    </div>
  );
}

export default Company_Contact_Show;
       