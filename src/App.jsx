import { useState } from 'react'
import Header_Cogip from './Header'
import AllInvoices from './All_invoices'
import AllContacts from './All_contacts'
import CompaniesList from './All_companies'
import Footer from '../footer'
import Home from './landing'
import '../src/App.css'


function App() {
  return (
    <>
      <div>
        <Home />
        <Header_Cogip />
        <AllInvoices />
        <AllContacts />
        <CompaniesList/>
        <Footer />
      </div>
    </>
  )
}
export default App
