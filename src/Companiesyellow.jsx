import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from './filter';
import './yellow_table.css';

const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Company Name: {data.company_name}</span>
    <span>TVA: {data.tva}</span>
    <span>Country: {data.country}</span>
    <span>Type Name: {data.type_name}</span>
    <span>Company Creation: {data.company_creation}</span>
  </div>;

const columns = [
  {
    name: 'Company Name',
    selector: row => row.company_name,
    sortable: true,
    grow: 3,
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
    name: 'Type Name',
    selector: row => row.type_name,
    sortable: true,
    hide: 'md',
  },
  {
    name: 'Created At',
    selector: row => row.company_creation,
    sortable: true,
    hide: 'md',
  },
];

function CompanieTable({fetchFive, pagination, showSubHeaderComponent}) {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    
      const url = fetchFive
        ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fivecompanies'
        : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/companies';


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
      title="Companies"
      striped={true}
      columns={columns}
      data={filteredItems}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      pagination={pagination}
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}

export default CompanieTable;