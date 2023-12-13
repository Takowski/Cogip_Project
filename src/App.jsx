import { useState, useEffect } from 'react'
import Header_Cogip from './Header'
import Footer from '../footer'
import CompanieTable from './assets/json/yellowpage/Companiesyellow'
import ContactsTable from './assets/json/yellowpage/Contactsyellow'
import InvoicesTable from './assets/json/yellowpage/Invoicesyellow'
import '../src/App.css'
import { BrowserRouter as Router, Switch as RouterSwitch, Route } from 'react-router-dom';


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
      <div>
        <Header_Cogip />
        <Switch>
          <Route path='/home'>
            <div className="companies5" >
              <div className="card">
                <InvoicesTable
                  fetchFive={true}
                  pagination={false}
                  showSubHeaderComponent={false}
                  expandedRows={isExpanded}
                />
              </div>
            </div>
          </Route>
          <Route path='/companies'>
            <div className="companies5" >
              <div className="card">
                <CompanieTable
                  fetchFive={true}
                  pagination={false}
                  showSubHeaderComponent={false}
                  expandedRows={isExpanded}
                />
              </div>
            </div>
          </Route>
          <Route path='/contacts'>
            <div className="companies5" >
              <div className="card">
                <ContactsTable
                  fetchFive={true}
                  pagination={false}
                  showSubHeaderComponent={false}
                  expandedRows={isExpanded}
                />
              </div>
            </div>
          </Route>
          <Route path='/Companies'>
            {/* Home page content goes here */}
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
export default App
