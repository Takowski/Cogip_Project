import React from 'react';
import DataTable from 'react-data-table-component';
import companies from './all_companies.json';

const Home = () => {
  const columns = Object.keys(companies[0]).map(key => ({
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

export default Home;