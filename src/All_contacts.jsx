import React from 'react';
import allContactsData from './all_contacts.json';

const ContactList = () => {
  const sortedContacts = [...allContactsData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>All Contacts</h2>
      <table className="w-full text-sm text-left rtl:text-right text-neutral-950 dark:text-gray-400">
        <thead className='text-xs text-neutral-950 uppercase bg-yellow-300 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th>Name</th> {/* ! changer pour <Link to={`/page/${contact.name}`}>{contact.name}</Link> car le nom doit etre un lien qui dirige vers une autre page */}
            <th>Phone</th>
            <th>Mail</th>
            <th>Company</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact, index) => (
            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700' key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.mail}</td>
              <td>{contact.company}</td>
              <td>{contact.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
