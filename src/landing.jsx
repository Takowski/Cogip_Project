import React, { useState, useMemo } from 'react';
import companies from './all_companies.json'; // Import the data
import DataTable from 'react-data-table-component';
import FilterComponent from './filter'; // Make sure to import or define FilterComponent
import './yellow_table.css';

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
    grow: 3,
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
    right: false,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
    right: false,
    hide: 'md',
  },
  {
    name: 'Created at',
    selector: row => row.created_at,
    sortable: true,
    right: false,
    hide: 'md',
    
  },
];

function MyComponent() {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const indexedCompanies = companies.map((company, index) => ({
    ...company,
    index,
  }));

  const filteredItems = indexedCompanies.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Companies"
      striped={true}
      columns={columns}
      data={filteredItems} // Use the filtered items
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      
    />
  );
}

export default MyComponent;