import React, { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from './filter.jsx';
import  './mauves_tables.css';
import ContextMenu from './ContextMenuMauve.jsx';
import EditPopup from './EditPopupMauve.jsx';




const ExpandedComponent = ({ data }) =>
  <div className='container flex flex-col p-3 gap-y-1'>
    <span>Company Name: {data.company_name}</span>
    <span>TVA: {data.tva}</span>
    <span>Country: {data.country}</span>
  </div>;

  






function CompanieTableMauve({ fetchFive, pagination, showSubHeaderComponent, expandedRows }) {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [pendging, setPendging] = useState(true);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = useState(false); // Add this line
const [editRow, setEditRow] = useState(null); // Add this line
  
const handleEdit = (row) => {
  setEditRow(row); // Add this line
  setOpen(true); // Add this line
};

  const handleDelete = (row) => {
    const id = row.id; 
    console.log('Delete:', id);
  setPendging(true);
    fetch(`https://api-cogip-329f9c72c66d.herokuapp.com/api/del-company/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setReload(!reload);
      setPendging(false);
    })
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

  useEffect(() => {
    const url = (fetchFive
      ? 'https://api-cogip-329f9c72c66d.herokuapp.com/api/companies'
      : 'https://api-cogip-329f9c72c66d.herokuapp.com/api/fivecompanies') + `?reload=${reload}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => { 
        setCompanies(data.data);
        setPendging(false);
      });
  }, [fetchFive, reload]);

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
    <div>
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
      progressPending={pendging}
    />
    <EditPopup row={editRow} open={open} setOpen={setOpen} />
    </div>
  );
}

export default CompanieTableMauve;