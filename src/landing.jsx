
import companies from './all_companies.json'; // Import the data
import DataTable from 'react-data-table-component';
import './landing.css';


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

const conditionalRowStyles = [
  {
    when: () => true, 
    style: (row) => ({
      backgroundColor: row.index % 2 === 0 ? 'white' : '#F5F5F5',
    }),
  },
];

function MyComponent() {
  const indexedCompanies = companies.map((company, index) => ({
    ...company,
    index,
  }));

  return (
    <DataTable
      title="Companies"
      columns={columns}
      data={indexedCompanies} // Use the indexed data
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      conditionalRowStyles={conditionalRowStyles}
      
    />
  );
}

export default MyComponent;