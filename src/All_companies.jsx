import React from 'react';
import allCompaniesData from './all_companies.json';
import './App.css';

const CompaniesList = () => {
  const sortedContacts = [...allCompaniesData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h2>All Companies</h2>
      <table className="text-sm text-left rtl:text-right text-neutral-950 dark:text-gray-400">
        <thead className='text-xs text-neutral-950 uppercase bg-yellow-300 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th>Name</th> {/* ! changer pour <Link to={`/page/${company.name}`}>{company.name}</Link> car le nom de la compagnie doit etre un lien qui dirige vers une autre page */}
            <th>TVA</th>
            <th>Country</th>
            <th>Type</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((companies, index) => (
            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700' key={index}>
              <td>{companies.name}</td>
              <td>{companies.TVA}</td>
              <td>{companies.copuntry}</td>
              <td>{companies.type}</td>
              <td>{companies.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompaniesList;