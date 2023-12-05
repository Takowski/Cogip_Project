import { useState } from 'react'
import Company_Contact_Show from './Company_Contact_Show'
import Company_Last_Invoices from './Company_Last_Invoices'
import Company_Name from './Company_Name'
import './App.css'



function App() {
  return (
    <>
      <div>
        <Company_Name />
        <Company_Contact_Show />
        <Company_Last_Invoices />
      </div>
    </>
  )
}
export default App
