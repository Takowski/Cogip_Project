import { useState, useEffect } from 'react'
import Header_Cogip from './Header'
import Footer from '../footer'
import CompanieTable from './assets/json/yellowpage/Companiesyellow'
import ContactsTable from './assets/json/yellowpage/Contactsyellow'
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
    <>

      <div>
        <Header_Cogip />

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
        




        {/* <AllInvoices />
        <AllContacts />
        <CompaniesList/> */}
        <Footer />
      </div>
    </>
  )
}
export default App
