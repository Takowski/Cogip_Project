import { useState } from 'react'
import AllInvoices from './All_invoices'
import AllContacts from './All_contacts'
import CompaniesList from './All_companies'
import Footer from '../footer'
import '../src/App.css'


function App() {
  return (
    <>
      <div>
        <AllInvoices />
        <AllContacts />
        <CompaniesList/>
        <Footer />
      </div>
    </>
  )
}
export default App
