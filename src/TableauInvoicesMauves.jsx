import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from './filter.jsx';
import  './mauves_tables.css';

const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Company Name: {data.company_name}</span>
    <span>TVA: {data.tva}</span>
    <span>Country: {data.country}</span>
  </div>;

const columns = [
    {
        name: 'Invoice Number',
        selector: row => row.ref,
        sortable: true,
        grow: 1,
    },
    {
        name: 'Dates',
        selector: row => row.date_due,
        sortable: true,
        hide: 'md',
    },
    {
        name: 'Company',
        selector: row => row.company_name,
        sortable: true,
    },
];

function InvoicesTableMauve({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    const url = fetchFive
      ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/invoices'
      : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fiveinvoices';
      

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

  return (
    <DataTable
      title="Last Invoices"
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

export default InvoicesTableMauve;