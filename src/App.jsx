import { useState, useEffect } from 'react'
import Header_Cogip from './Header'
import Footer from '../footer'
import CompanieTable from './assets/json/yellowpage/Companiesyellow'
import '../src/App.css'


function App() {


  return (
    <>

      <div>
        <Header_Cogip />

        <div className="companies5" >
          <card className="card">
            <CompanieTable
              fetchFive={true}
              pagination={false}
              showSubHeaderComponent={false}







            />
          </card>
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
