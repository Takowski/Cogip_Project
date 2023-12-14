import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from '../../../filter';
import './yellow_table.css';

const ExpandedComponent = ({ data }) =>
    <div className='container flex flex-col p-3 gap-y-1'>
        <span>Name: {data.name}</span>
        <span>Email: {data.email}</span>
        <span>Phone: {data.phone}</span>
        <span>Contact Creation: {data.contact_creation}</span>
        <span>Company Name: {data.company_name}</span>
    </div>;

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
       
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
    {
        name: 'Company Name',
        selector: row => row.company_name,
        sortable: true,
        
    },
    {
        name: 'Created at',
        selector: row => row.contact_creation,
        sortable: true,
        hide: 'md',
    },
];

function ContactsTable({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [contacts, setContacts] = useState([]);
  
    useEffect(() => {
      const url = fetchFive
        ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fivecontacts'
        : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/contacts';
  
      fetch(url)
        .then(response => response.json())
        .then(data => setContacts(data.data));
    }, [fetchFive]);
  
    const indexedContacts = contacts.map((contact, index) => ({
      ...contact,
      index,
    }));
  
    const filteredItems = indexedContacts.filter(
      item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
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
  
  return (
    <DataTable
      title="Contacts"
      striped={true}
      columns={columns}
      data={filteredItems}
      expandableRows={expandedRows}
      expandableRowsComponent={ExpandedComponent}
      pagination={pagination}
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}

export default ContactsTable;