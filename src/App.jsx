import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header_Cogip from './Header'
import Footer from '../footer'
import CompanieTable from './assets/json/yellowpage/Companiesyellow'
import ContactsTable from './assets/json/yellowpage/Contactsyellow'
import InvoicesTable from './assets/json/yellowpage/Invoicesyellow'
import FormCompanies from './FormCompanies'
import FormContacts from './FormContacts'
import FormInvoices from './FormInvoices'
import Manage from './Manage'
import FormeBizarre from './FormeBizarre'
import WorkBetter from './WorkeBetter'
import CompanyPage from './assets/json/yellowpage/ShowCompany'
import '../src/App.css'
import DashboardV2 from './dashboardV2';





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
      <WorkBetter />
     
     </>
      } />
      <Route path="/AllCompanies" element={
      <CompanieTable 
      fetchFive={false} 
      pagination={true} 
      showSubHeaderComponent={false} 
      expandedRows={isExpanded} />
      } />
      <Route path="/AllContacts" element={
      <ContactsTable 
      fetchFive={false} 
      pagination={true} 
      showSubHeaderComponent={false} 
      expandedRows={isExpanded} />
      } />
      <Route path="/AllInvoices" element={
      <InvoicesTable
      fetchFive={false}
      pagination={true}
      showSubHeaderComponent={false}
      expandedRows={isExpanded} />
      } />
      <Route path="/FormCompanies" element={
      <FormCompanies />
      } />
      <Route path="/FormContacts" element={
      <FormContacts />
      } />
      <Route path="/FormInvoices" element={
      <FormInvoices />
      } />
      <Route path='/company/:id' element={<CompanyPage />} />
      
      
    </Routes>
    <Footer />
  </Router>
);
}

export default App


    //  <Router>
    // <Dashboard/>
    // <DashboardV2/>
    // <Route path="/invoices" component={FormInvoices} />
    // <Route path="/contacts" component={FormContacts} />
    // <Route path="/companies" component={FormCompanies} />
    // </Router>