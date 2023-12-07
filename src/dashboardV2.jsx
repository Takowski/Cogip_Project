import React from 'react';

const DashboardV2 = () => {
  return (
    <>
    <body className=' bg-white-lilac-50 h-full'>
        
    <header className='p-5'>
        <div className='flex flex-col items-start'> {/*pour la version mobile*/}
        <img src="../public/Henry.png" width={105} height={105} alt="Photo de Henry Georges" className="mb-4 rounded-full" />
        <p className='text-xl'>Henry Georges</p>
        </div>
        <nav> {/*burger menu*/}
            <span></span>
            <span></span>
            <span></span>
        </nav> 

        <nav className='hidden md:block'> {/*pour la version desktop*/}
            <hr/>
            {/* changer les href par des Link To pour rediriger vers les pages */}
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0968 6.03223V21.2903" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M0.354858 6.03223H21.2903" stroke="#9698D6"/></svg>Dashboard</a>
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.88232 11H17.4706" stroke="#9698D6"/><path d="M3.88232 16.8235H17.4706" stroke="#9698D6"/><path d="M3.88232 7.11768H7.76468" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Invoices</a>
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82355 10.353H7.76472M5.82355 14.2354H7.76472M12.2941 8.41187H15.5294M12.2941 11.6472H15.5294M12.2941 14.2354H15.5294" stroke="#9698D6"/><path d="M1.29407 16.8236H20.7058M3.8823 16.8236V7.11768H7.1176H10.3529V16.8236H3.8823Z" stroke="#9698D6"/><path d="M10.353 7.62853V5.17651H18.1177V16.8236" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Companies</a>
            <a className="flex py-2.5 px-4" href="#"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M16.8235 18.1176H5.17645V11.647L11 12.9411L16.8235 11.647V18.1176Z" stroke="#9698D6"/><circle cx="11" cy="8.41174" r="4.02941" stroke="#9698D6"/></svg>Contacts</a>
            <hr />
        </nav>
        <div className="mt-auto flex justify-between items-center hidden md:block"> {/*pour la version desktop*/}
            <img src="../public/Henry.png" width={48} height={48} alt="Photo de Henry Georges là" className="mb-4 rounded-full"/> 
            <a className='text-violet-300' href="#">Logout</a>
        </div>
        <img className="hidden md:block" src="/public/example-scene-2 1.svg" alt="" />
            <section className='p-5 bg-blue-bell-400 rounded-xl text-white box-border m-auto'>
            <h1 className='text-3xl'>Welcome back Henry !</h1>
            <p className='text-base'>You can here add an invoice, a company and some contacts</p>
        </section>
    </header>

    <main>
    <div className='grid md:grid-cols-2 gap-4'>


        <section className='p-5 bg-white m-auto rounded-lg box-border'>
            <h2 className='text-xl p-1'>Statistics</h2>
            <hr />
            <div className='flex justify-center align-middle p-5'>
                <div style={{ backgroundColor: '#4D4CAC' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white ml-2'>245 invoices</p></div>  {/*ajouter le nombre d'invoice de l'API*/}
                <div style={{ backgroundColor: '#9698D6' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white ml-2'>245 contacts</p></div> {/*ajouter le nombre de company de l'API*/}
                <div style={{ backgroundColor: '#FF808B' }} className='h-70 w-70 rounded-full mr-4 flex items-center justify-center'><p className='text-white ml-2'>245 companies</p></div> {/*ajouter le nombre de contact de l'API*/}
            </div>

        </section>

        <section className='bg-white p-5 m-auto rounded-lg box-border'>
            <h2 className='text-xl p-1'>Last Invoices</h2>
            <hr />
            <table> {/*tableau à remplir avec les données de l'API*/}
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
        </section>

        <section className='bg-white p-5 m-auto rounded-lg box-border'>
            <h2 className='text-xl p-1'>Last Contacts</h2>
            <hr />
            <table> {/*tableau à remplir avec les données de l'API*/}
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
        </section>        
        
        <section className='bg-white p-5 m-auto rounded-lg box-border'>
            <h2 className='text-xl p-5'>Last Companies</h2>
            <hr />
            <table> {/*tableau à remplir avec les données de l'API*/}
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
        </section>
    </div>
        
    </main>
    </body>
    </>
  );
};
export default DashboardV2;