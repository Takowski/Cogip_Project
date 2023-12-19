import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Contact_Name from './Contact_Name';

function ShowContact() {
  const [contactData, setContactData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/contacts/${id}`)
      .then(response => response.json())
      .then(data => {
        setContactData(data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, [id]);

  return (
    <div>
      {contactData ? <Contact_Name data={contactData} /> : 'Loading...'}
    </div>
  );
}

export default ShowContact;