import React from 'react';
import DataTable from 'react-data-table-component';
import companies from './all_companies.json';

const TableHome = () => {
  const key = Object.keys(companies[0]);
  const columns=key.slice(1).map(key => ({
    name: key,
    selector: row => row[key],
    sortable: true,
  }));
const lastFiveCompanies = companies.slice(-5);
  return (
    <DataTable
      title="Companies"
      columns={columns}
      data={lastFiveCompanies}
    />
  );
};

export default TableHome;