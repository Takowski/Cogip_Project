import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from './filter.jsx';
import  './mauves_tables.css';
import ContextMenu from './ContextMenuMauve.jsx';




const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Company Name: {data.company_name}</span>
    <span>TVA: {data.tva}</span>
    <span>Country: {data.country}</span>
  </div>;

const handleEdit = (row) => {
  console.log('Edit:', row);
  // Implement your edit functionality here
};

const handleDelete = (row) => {
  const id = row.id; // Assuming the id is stored in the 'id' property
  console.log('Delete:', id);

  fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/del-company/${id}`, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
};

const columns = [
  {
    name: 'Name',
    selector: row => row.company_name,
    sortable: true,
    grow: 2,
  },
  {
    name: 'TVA',
    selector: row => row.tva,
    sortable: true,
    hide: 'sm',
  },
  {
    name: 'Country',
    selector: row => row.country,
    sortable: true,
  },
  {
    name: '',
    cell: row => <ContextMenu onEdit={() => handleEdit(row)} onDelete={() => handleDelete(row)} />,
    allowOverflow: true,
    button: true,
    width: '20px',
  },
];

function CompanieTableMauve({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    const url = fetchFive
      ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/companies'
      : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fivecompanies';


    fetch(url)
      .then(response => response.json())
      .then(data => setCompanies(data.data));
  }, [fetchFive]);

  const indexedCompanies = companies.map((company, index) => ({
    ...company,
    index,
  }));

  const filteredItems = indexedCompanies.filter(
    item => item.company_name && item.company_name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return showSubHeaderComponent ? (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    ) : null;
  }, [filterText, resetPaginationToggle, showSubHeaderComponent]);

  const customStyles = {
    cells: {
      style: {
        fontSize: '16px', 
      },
    },
    headCells: {
      style: {
        backgroundColor: 'white',
        color: '#000', 
        fontSize: '18px', 
      },
    },
  };
  return (
    <DataTable
      title="Last Companies"
      striped={true}
      columns={columns}
      data={filteredItems}
      expandableRows={expandedRows}
      expandableRowsComponent={ExpandedComponent}
      pagination={pagination}
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      customStyles={customStyles}
    />
  );
}

export default CompanieTableMauve;