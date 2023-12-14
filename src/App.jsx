import { useState } from 'react'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import DashboardV2 from './dashboardV2'
import FormCompanies from './FormCompanies'
import FormContacts from './FormContacts'
import FormInvoices from './FormInvoices'
// import Dashboard from './dashboard'



function App() {
  return (
    <>
      {/* <DashboardV2/> */}
      <FormCompanies/>
      <FormContacts/>
      <FormInvoices/>
    </>
  )
}

export default App


    //  <Router>
    // <Dashboard/>
    // <DashboardV2/>
    // <Route path="/invoices" component={FormInvoices} />
    // <Route path="/contacts" component={FormContacts} />
    // <Route path="/companies" component={FormCompanies} />
    // </Router>