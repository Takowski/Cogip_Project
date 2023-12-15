import React from 'react';
import CompanieTableMauve from './TableauCompaniesMauves';
import ContactsTableMauve from './TableauContactsMauves';
import InvoicesTableMauve from './TableauInvoicesMauves';
import StatisticsMauves from './StatisticsMauves';


const DashboardV2 = () => {
  return (
    <>
    <body className=' bg-white-lilac-50 h-full '>
        
    <header className='p-5'>

        <div> {/*MENU DE GAUCHE POUR MOBILE*/}
            <div className='flex flex-col items-start md:hidden'> {/*pour la version mobile*/}
            <img src="../public/Henry.png" width={105} height={105} alt="Photo de Henry Georges" className="mb-4 rounded-full" />
            <p className='text-xl'>Henry Georges</p>
        </div>

        
        <nav className="md:hidden fixed top-0 right-0 p-5"> 
            <span className="block bg-black h-1 w-5 mb-1"></span>
            <span className="block bg-black h-1 w-5 mb-1"></span>
            <span className="block bg-black h-1 w-5"></span>
        </nav>
        </div>

        <div className='md:block hidden w-48 fixed top-0 left-0 h-screen bg-white flex flex col space-y-4'> {/*MENU DE GAUCHE POUR DESKTOP*/}
            <section>
                <img src="../public/Henry.png" width={105} height={105} alt="Photo de Henry Georges" className=" m-auto mt-6 mb-4 rounded-full" />
                <p className='text-xl text-center'>Henry Georges</p>
                <hr className='mt-8'/>
            </section>
            
            <section>
                <nav className='hidden md:block mt-60 mb-60'> 
                    {/* changer les href par des Link To pour rediriger vers les pages */}
                    <a className="flex py-2.5 px-4" href="#"><svg className='mr-2' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0968 6.03223V21.2903" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M0.354858 6.03223H21.2903" stroke="#9698D6"/></svg>Dashboard</a>
                    <a className="flex py-2.5 px-4" href="#"><svg className='mr-2' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.88232 11H17.4706" stroke="#9698D6"/><path d="M3.88232 16.8235H17.4706" stroke="#9698D6"/><path d="M3.88232 7.11768H7.76468" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Invoices</a>
                    <a className="flex py-2.5 px-4" href="#"><svg className='mr-2' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82355 10.353H7.76472M5.82355 14.2354H7.76472M12.2941 8.41187H15.5294M12.2941 11.6472H15.5294M12.2941 14.2354H15.5294" stroke="#9698D6"/><path d="M1.29407 16.8236H20.7058M3.8823 16.8236V7.11768H7.1176H10.3529V16.8236H3.8823Z" stroke="#9698D6"/><path d="M10.353 7.62853V5.17651H18.1177V16.8236" stroke="#9698D6"/><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/></svg>Companies</a>
                    <a className="flex py-2.5 px-4" href="#"><svg className='mr-2' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6"/><path d="M16.8235 18.1176H5.17645V11.647L11 12.9411L16.8235 11.647V18.1176Z" stroke="#9698D6"/><circle cx="11" cy="8.41174" r="4.02941" stroke="#9698D6"/></svg>Contacts</a>
                </nav>
            </section>
            
            <section>
                <hr className='mb-4' />
                <div className='flex justify-around items-center'> {/*pour la version desktop*/}
                <img src="../public/Henry.png" width={48} height={48} alt="Photo de Henry Georges là" className="mb-4 rounded-full"/> 
                <a className='text-violet-300' href="#">Logout</a>
                </div>
            </section>
            
        

        </div>


        <section className=' bg-white-lilac-50 ml-48'> {/* header desktop version */}
            <div className='flex justify-between'>
                <div>
                    <h1 className='ml-5 mt-5 text-3xl font-bold md:block hidden'>Dashboard</h1> {/*ajouter le nom de la page*/}
                    <p className='ml-5 text-gray-500 md:block hidden'>dashboard/</p>{/*ajouter le nom de la page*/}
                </div>
                
                <img className="hidden md:block" src="/public/example-scene-2 1.svg" alt="" />
            </div>
            
            <div className=' p-14 rounded-xl md:block hidden  bg-blue-bell-400 text-white'>
                <h1 className='text-3xl ml:hidden'>Welcome back Henry !</h1>
                <p className='text-base ml:hidden'>You can here add an invoice, a company and some contacts</p>
            </div>
        </section>

        <section className='p-5 bg-blue-bell-400 rounded-xl text-white box-border m-auto md:hidden'> {/* header mobile version */}
            <img className="hidden md:block fixed top-0 right-0" src="/public/example-scene-2 1.svg" alt="" />
            <h1 className='text-3xl'>Welcome back Henry !</h1>
            <p className='text-base'>You can here add an invoice, a company and some contacts</p>
        </section>
    </header>

    <main>
    <div className='grid md:grid-cols-2 gap-4'> {/*MOBILE VERSION*/}


        <section className='p-5 bg-white m-auto rounded-lg box-border md:hidden'>
            <StatisticsMauves />
        </section>

        <section className='bg-white p-5 m-auto rounded-lg box-border md:hidden'>
            <InvoicesTableMauve />
        </section>

        <section className='bg-white p-5 m-auto rounded-lg box-border md:hidden'>
            <ContactsTableMauve />
        </section>        
        
        <section className='bg-white p-5 m-auto rounded-lg box-border md:hidden'>
            <CompanieTableMauve />
        </section>
    </div>

    <div> {/*DESKTOP VERSION*/}
    <div className="mt-auto flex justify-between items-center hidden md:flex md:flex-wrap md:justify-center md:items-center fixed md:left-48 top-450 bg-white-lilac-50 gap-6"> 


            <section className='p-5 w-507 h-403 bg-white m-auto rounded-lg box-border'>
                <StatisticsMauves />
            </section>

            <section className='bg-white p-5 m-auto rounded-lg box-border w-507 h-403'>
               <InvoicesTableMauve />
            </section>

            <section className='bg-white p-5 m-auto rounded-lg box-border w-507 h-403'>
               <ContactsTableMauve />
            </section>        

            <section className='bg-white p-5 m-auto rounded-lg box-border w-507 h-403'>
                <CompanieTableMauve />
            </section>
            </div>
            </div>
                    
    </main>
    </body>
    </>
  );
};
export default DashboardV2;