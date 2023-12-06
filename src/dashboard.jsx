import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-mercury-50">
      <div className="p-6 w-1/5 bg-white flex flex-col"> {/*partie de gauche}

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
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.88232 11H17.4706" stroke="#9698D6"/><path d="M3.88232 16.8235H17.4706" stroke="#9698D6"/><path d="M3.88232 7.11768H7.76468" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Invoices</a>
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82355 10.353H7.76472M5.82355 14.2354H7.76472M12.2941 8.41187H15.5294M12.2941 11.6472H15.5294M12.2941 14.2354H15.5294" stroke="#9698D6"/><path d="M1.29407 16.8236H20.7058M3.8823 16.8236V7.11768H7.1176H10.3529V16.8236H3.8823Z" stroke="#9698D6"/><path d="M10.353 7.62853V5.17651H18.1177V16.8236" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Companies</a>
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M16.8235 18.1176H5.17645V11.647L11 12.9411L16.8235 11.647V18.1176Z" stroke="#9698D6"/><circle cx="11" cy="8.41174" r="4.02941" stroke="#9698D6"/></svg>Contacts</a>
            <hr />
        </nav>

        {/* partie du bas */}
        <div className="mt-auto flex justify-between items-center">
            <img src="../public/Henry.png" width={48} height={48} alt="Photo de Henry Georges là" className="mb-4 rounded-full"/> 
            <a className='text-violet-300' href="#">Logout</a>
        </div>
      </div>

      <div className="grid grid-rows-3 grid-cols-2 gap-4 w-full"> {/*partie de droite*/}
      <div className="h-378 w-1044 row-span-1 col-span-2 m-auto flex flex-col justify-end">
  <img className="absolute top-0 right-36" width={417} height={333} src="/public/example-scene-2 1.svg" alt="" />

  <div style={{ height: '206px' }} className='w-1044 h-206 bg-blue-bell-400 rounded-xl'>
    <p className='font-bold text-4xl text-white ml-16 mt-14'>Welcome back Henry!</p>
    <p className='text-white ml-16'>You can here add an invoice, a company and some contacts</p>
  </div>
</div>

      {/* Deuxième ligne avec deux divs */}
      <div className='flex items-center justify-center'>
        <p>Statistics</p>
        <div style={{ backgroundColor: '#4D4CAC' }} className='h-18 w-18 rounded-full mr-4'></div>
        <div style={{ backgroundColor: '#9698D6' }} className='h-18 w-18 rounded-full mr-4'></div>
        <div style={{ backgroundColor: '#FF808B' }} className='h-18 w-18 rounded-full mr-4'></div>
      </div>
      <div className='bg-white w-507 h-403'>
        <p>Last Invoices</p>
        <hr />
        <table className="table-auto m-0"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">INV-001</td>
                <td className="border px-4 py-2">2022-01-01</td>
                <td className="border px-4 py-2">Company A</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-002</td>
                <td className="border px-4 py-2">2022-01-02</td>
                <td className="border px-4 py-2">Company B</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-003</td>
                <td className="border px-4 py-2">2022-01-03</td>
                <td className="border px-4 py-2">Company C</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-004</td>
                <td className="border px-4 py-2">2022-01-04</td>
                <td className="border px-4 py-2">Company D</td>
                </tr>
            </tbody>
        </table>
      </div>

      {/* Troisième ligne avec deux divs */}
      <div className='bg-white w-507 h-403'>
        <p>Last Contacts</p>
        <hr />
        <table className="table-auto m-0"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">INV-001</td>
                <td className="border px-4 py-2">2022-01-01</td>
                <td className="border px-4 py-2">Company A</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-002</td>
                <td className="border px-4 py-2">2022-01-02</td>
                <td className="border px-4 py-2">Company B</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-003</td>
                <td className="border px-4 py-2">2022-01-03</td>
                <td className="border px-4 py-2">Company C</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-004</td>
                <td className="border px-4 py-2">2022-01-04</td>
                <td className="border px-4 py-2">Company D</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className='bg-white w-507 h-403'>
        <p>Last Companies</p>
        <hr />
        <table className="table-auto m-0"> {/*tableau à remplir avec les données de l'API*/}
            <thead>
                <tr>
                <th className="px-4 py-2">Invoice Number</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Company</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">INV-001</td>
                <td className="border px-4 py-2">2022-01-01</td>
                <td className="border px-4 py-2">Company A</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-002</td>
                <td className="border px-4 py-2">2022-01-02</td>
                <td className="border px-4 py-2">Company B</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-003</td>
                <td className="border px-4 py-2">2022-01-03</td>
                <td className="border px-4 py-2">Company C</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">INV-004</td>
                <td className="border px-4 py-2">2022-01-04</td>
                <td className="border px-4 py-2">Company D</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
           
      
    </div>
  );
};

export default Dashboard;