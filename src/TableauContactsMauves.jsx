import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from './filter.jsx';


const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Company Name: {data.company_name}</span>
    <span>TVA: {data.tva}</span>
    <span>Country: {data.country}</span>
  </div>;


const columns = [
  {
    name: 'Name',
    selector: row => row.company_name,
    sortable: true,
    grow: 2,
  },
  {
    name: 'Phone',
    selector: row => row.phone,
    sortable: true,
    hide: 'md',
},
{
    name: 'Email',
    selector: row => row.email,
    sortable: true,
    hide: 'sm',
},
];

function ContactsTableMauve({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    const url = fetchFive
      ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/contacts'
      : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fivecontacts';


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
        border: '1px solid white',
      },
    },
    headCells: {
      style: {
        backgroundColor: 'white',
        color: '#000', 
        fontSize: '18px', 
        border: '1px solid white',
      },
    },
  };
  return (


    <DataTable
      title="Last Contacts"
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

export default ContactsTableMauve;