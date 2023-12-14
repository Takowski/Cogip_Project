import React from 'react';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-white-lilac-50 max-w-1044">
      <div className="flex flex-col w-1/5 p-6 bg-white"> {/*partie de gauche}

        {/* partie du haut */}
        <div className="ml-auto mr-auto">
          <img src="../public/Henry.png" width={105} height={105} alt="Photo de Henry Georges là" className="mb-4 rounded-full"/>
          <p>Henry Georges</p>
        </div>

        {/* partie du milieu */}
        <nav>
            <hr/>
            {/* changer les href par des Link To pour rediriger vers les pages */}
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0968 6.03223V21.2903" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M0.354858 6.03223H21.2903" stroke="#9698D6"/></svg>Dashboard</a>
            <Link to="/invoices" className="flex py-2.5 px-4"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.88232 11H17.4706" stroke="#9698D6"/><path d="M3.88232 16.8235H17.4706" stroke="#9698D6"/><path d="M3.88232 7.11768H7.76468" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Invoices</Link>
            <Link to="/companies" className="flex py-2.5 px-4"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82355 10.353H7.76472M5.82355 14.2354H7.76472M12.2941 8.41187H15.5294M12.2941 11.6472H15.5294M12.2941 14.2354H15.5294" stroke="#9698D6"/><path d="M1.29407 16.8236H20.7058M3.8823 16.8236V7.11768H7.1176H10.3529V16.8236H3.8823Z" stroke="#9698D6"/><path d="M10.353 7.62853V5.17651H18.1177V16.8236" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Companies </Link>
            <Link to="/contacts" className="flex py-2.5 px-4"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M16.8235 18.1176H5.17645V11.647L11 12.9411L16.8235 11.647V18.1176Z" stroke="#9698D6"/><circle cx="11" cy="8.41174" r="4.02941" stroke="#9698D6"/></svg>Contacts</Link>
            <hr />
        </nav>

        {/* partie du bas */}
        <div className="flex items-center justify-between mt-auto">
            <img src="../public/Henry.png" width={48} height={48} alt="Photo de Henry Georges là" className="mb-4 rounded-full"/> 
            <a className='text-violet-300' href="#">Logout</a>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 grid-rows-3 gap-4"> {/*partie de droite*/}
      <div className="flex flex-col justify-end col-span-2 row-span-1 m-auto h-378 w-1044">
  <img className="absolute top-0 right-36" width={417} height={333} src="/public/example-scene-2 1.svg" alt="" />

  <div style={{ height: '206px' }} className='w-1044 h-206 bg-blue-bell-400 rounded-xl'>
    <p className='ml-16 text-4xl font-bold text-white mt-14'>Welcome back Henry!</p>
    <p className='ml-16 text-white'>You can here add an invoice, a company and some contacts</p>
  </div>
</div>

      {/* Deuxième ligne avec deux divs */}
      <div className='bg-white'>
        <p>Statistics</p>
        <div className='flex items-center justify-center'>
          <div style={{ backgroundColor: '#4D4CAC' }} className='mr-4 rounded-full h-70 w-70'></div>
          <div style={{ backgroundColor: '#9698D6' }} className='mr-4 rounded-full h-70 w-70'></div>
          <div style={{ backgroundColor: '#FF808B' }} className='mr-4 rounded-full h-70 w-70'></div>
        </div>
      </div>

      <div  className='bg-white'>
        <p>Last Invoices</p>
        <hr />
        <table className="m-0 table-auto"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-4 py-2 border">INV-001</td>
                <td className="px-4 py-2 border">2022-01-01</td>
                <td className="px-4 py-2 border">Company A</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-002</td>
                <td className="px-4 py-2 border">2022-01-02</td>
                <td className="px-4 py-2 border">Company B</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-003</td>
                <td className="px-4 py-2 border">2022-01-03</td>
                <td className="px-4 py-2 border">Company C</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-004</td>
                <td className="px-4 py-2 border">2022-01-04</td>
                <td className="px-4 py-2 border">Company D</td>
                </tr>
            </tbody>
        </table>
      </div>

      {/* Troisième ligne avec deux divs */}
      <div  className='bg-white'>
        <p>Last Contacts</p>
        <hr />
        <table className="m-0 table-auto"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-4 py-2 border">INV-001</td>
                <td className="px-4 py-2 border">2022-01-01</td>
                <td className="px-4 py-2 border">Company A</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-002</td>
                <td className="px-4 py-2 border">2022-01-02</td>
                <td className="px-4 py-2 border">Company B</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-003</td>
                <td className="px-4 py-2 border">2022-01-03</td>
                <td className="px-4 py-2 border">Company C</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-004</td>
                <td className="px-4 py-2 border">2022-01-04</td>
                <td className="px-4 py-2 border">Company D</td>
                </tr>
            </tbody>
        </table>
      </div> 
      <div className='bg-white'>
        <p>Last Companies</p>
        <hr />
        <table className="m-0 table-auto"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-4 py-2 border">INV-001</td>
                <td className="px-4 py-2 border">2022-01-01</td>
                <td className="px-4 py-2 border">Company A</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-002</td>
                <td className="px-4 py-2 border">2022-01-02</td>
                <td className="px-4 py-2 border">Company B</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-003</td>
                <td className="px-4 py-2 border">2022-01-03</td>
                <td className="px-4 py-2 border">Company C</td>
                </tr>
                <tr>
                <td className="px-4 py-2 border">INV-004</td>
                <td className="px-4 py-2 border">2022-01-04</td>
                <td className="px-4 py-2 border">Company D</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
           
      
    </div>
  );
};

export default Dashboard;