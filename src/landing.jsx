import React from 'react';
import companies from './all_companies.json'; // Import the data
import DataTable from 'react-data-table-component';

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

const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);

function MyComponent() {
  return (
    <DataTable
      title="Companies"
      columns={columns}
      data={companies} // Use the imported data
      onSort={handleSort}
    
    />
  );
}

export default MyComponent;