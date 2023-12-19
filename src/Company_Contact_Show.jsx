import React, { useEffect, useState } from "react";

function Company_Contact_Show({data}) {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    Promise.all(data.contacts.map(contactId => 
      fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/contacts/${contactId}`)
        .then(response => response.json())
        .then(contact => contact.data)  // Extract the data property directly
    ))
    .then(contactDetails => {
      setContactData(contactDetails);
    })
    .catch(error => console.error('Error:', error));
  }, [data.id, data.contacts]);

  return (
    <div>
      <h2 className='mt-6 mb-5 ml-10 text-2xl font-bold'>Contact people</h2>
      <div className="grid items-center w-2/3 grid-cols-2 gap-2 ml-10 mr-8">
        {contactData && contactData.map((contact, index) => (
          <div key={index} className='flex items-center p-2 space-x-4 rounded bg-gray-300/20'>
            <p className="text-xs font-bold ">{contact.name}</p>
          </div>
        ))}
      </div>  
      <p className='mt-6 mb-6 border border-solid'></p>
    </div>
  );
}

export default Company_Contact_Show;