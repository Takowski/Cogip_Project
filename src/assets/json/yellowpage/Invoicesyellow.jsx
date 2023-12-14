import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from '../../../filter';
import './yellow_table.css';

const ExpandedComponent = ({ data }) =>
    <div className='container flex flex-col p-3 gap-y-1'>
        <span>Reference: {data.ref}</span>
        <span>Due Date: {data.date_due}</span>
        <span>Invoice Creation: {data.invoice_creation}</span>
        <span>Company Name: {data.company_name}</span>
    </div>;

const columns = [
    {
        name: 'Number',
        selector: row => row.ref,
        sortable: true,
        grow: 1,
    },
    {
        name: 'Date Due',
        selector: row => row.date_due,
        sortable: true,
        hide: 'md',
    },
    {
        name: 'Created At',
        selector: row => row.invoice_creation,
        sortable: true,
        hide: 'sm',
    },
    {
        name: 'Company',
        selector: row => row.company_name,
        sortable: true,
    },
];

function InvoicesTable({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const [invoices, setInvoices] = useState([]);
  
    useEffect(() => {
      const url = fetchFive
        ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fiveinvoices'
        : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/invoices';
       
  
        fetch(url)
        .then(response => response.json())
        .then(data => setInvoices(data.data));
    }, [fetchFive]);
  
    const indexedInvoices = invoices.map((invoice, index) => ({
      ...invoice,
      index,
    }));
  
    const filteredItems = indexedInvoices.filter(
        item => item.ref && item.ref.toLowerCase().includes(filterText.toLowerCase()),
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
      title="Invoices"
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

export default InvoicesTable;