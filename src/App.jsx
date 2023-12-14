import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_Cogip from './Header'
import Footer from '../footer'
import CompanieTable from './assets/json/yellowpage/Companiesyellow'
import ContactsTable from './assets/json/yellowpage/Contactsyellow'
import InvoicesTable from './assets/json/yellowpage/Invoicesyellow'
import Manage from './Manage'
import FormeBizarre from './FormeBizarre'
import WorkBetter from './WorkeBetter'
import '../src/App.css'



function App() {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 959);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth < 959);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
    <Header_Cogip />
    <Routes>
      <Route path="/" element={
        <>
        <Manage />
        <FormeBizarre />
       <div className="companies5" >
       <card className="card">
         <InvoicesTable
           fetchFive={true}
           pagination={false}
           showSubHeaderComponent={false}
           expandedRows={isExpanded}
         />
       </card>
     </div>
     <div className="companies5" >
       <card className="card">
         <CompanieTable
           fetchFive={true}
           pagination={false}
           showSubHeaderComponent={false}
           expandedRows={isExpanded}
         />
       </card>
     </div>
     <div className="companies5" >
       <card className="card">
         <ContactsTable
           fetchFive={true}
           pagination={false}
           showSubHeaderComponent={false}
           expandedRows={isExpanded}
         />
       </card>
     </div>
     </>
      } />
      <Route path="/AllCompanies" element={
      <CompanieTable 
      fetchFive={true} 
      pagination={false} 
      showSubHeaderComponent={false} 
      expandedRows={isExpanded} />
      } />
      <Route path="/AllContacts" element={
      <ContactsTable 
      fetchFive={true} 
      pagination={false} 
      showSubHeaderComponent={false} 
      expandedRows={isExpanded} />
      } />
      <Route path="/AllInvoices" element={
      <InvoicesTable
      fetchFive={true}
      pagination={false}
      showSubHeaderComponent={false}
      expandedRows={isExpanded} />
      } />
      
    </Routes>
    <Footer />
  </Router>
);
}
export default App
