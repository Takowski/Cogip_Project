import React, { useState, useEffect } from "react";
import InvoicesCompaniesData from './Invoices_Company_Show.json';

function Company_Last_Invoices() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(InvoicesCompaniesData);
    }, []);

    return (
        <div>
            <h2 className="mt-6 mb-5 ml-10 text-2xl font-bold">Last invoices</h2>
            <table className="ml-10 mr-10 text-sm text-left rtl:text-right text-neutral-950 dark:text-gray-400" style={{width: '80%'}}>
                <thead className='text-xs uppercase bg-yellow-300 text-neutral-950 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th>Invoice number</th>
                        <th>Dates</th>
                        <th>Company</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr className='border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700' key={index}>
                            <td>{item.invoice_num}</td>
                            <td>{item.dates}</td>
                            <td>{item.company}</td>
                            <td>{item.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-6 mb-6 border border-yellow-300 border-solid"></p>
        </div>
    );
};

export default Company_Last_Invoices;