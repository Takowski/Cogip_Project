
import companies from './all_companies.json'; // Import the data
import DataTable from 'react-data-table-component';
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
  const indexedCompanies = companies.map((company, index) => ({
    ...company,
    index,
  }));

  return (
    <DataTable
    title="Companies"
    
    striped={true}
      columns={columns}
      data={indexedCompanies} // Use the indexed data
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      
      
    />
  );
}

export default MyComponent;