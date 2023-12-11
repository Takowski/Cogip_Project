
import companies from './all_companies.json'; // Import the data
import DataTable from 'react-data-table-component';
import './yellow_table.css';
import React, { useEffect, useState } from 'react';


const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Name: {data.name}</span>
    <span>TVA Numer: {data.TVA}</span>
    <span>Country: {data.country}</span>
    <span>Type: {data.type}</span>
    <span>Created at: {data.created_at}</span>
  </div>;

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
    grow: 2,
  },
  {
    name: 'TVA',
    selector: row => row.TVA,
    sortable: true,
    hide: 'sm',
  },
  {
    name: 'Country',
    selector: row => row.country,
    sortable: true,
    right: true,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
    right: true,
    hide: 'md',
  },
  {
    name: 'Created At',
    selector: row => row.created_at,
    sortable: true,
    right: true,
    hide: 'md',
  },
];


function Table({limit}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api-cogip-329f9c72c66d.herokuapp.com/api/companies')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setData(data.slice(0, limit)))
      .catch(error => console.error('Error:', error));
  }, [limit]);



  return (
    <DataTable
      title="Companies"
      columns={columns}
      data={data} // Use the indexed data
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      
      
    />
  );
}

export default Table;