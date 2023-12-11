import { useState,useEffect } from 'react'
import Header_Cogip from './Header'
// import AllInvoices from './All_invoices'
// import AllContacts from './All_contacts'
// import CompaniesList from './All_companies'
import Footer from '../footer'
import TableHome from './landing'
import '../src/App.css'


function App() {

  
  return (
    <>

      <div>
        <Header_Cogip />
        
        
        <div className='grid justify-items-center'>
          <TableHome />
        </div>
        
        


        {/* <AllInvoices />
        <AllContacts />
        <CompaniesList/> */}
        <Footer />
      </div>
    </>
  )
}
export default App
