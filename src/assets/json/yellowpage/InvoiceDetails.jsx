import React from "react";

function InvoiceDetails({ data }) {
    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <style jsx>{`
        .underline-after {
            position: relative;
        }
      
        .underline-after::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -5px;
            left: 15px;
            width: 100%;
            height: 20px; 
            background-color: #FCD34D;
            z-index: -1;
        }
        `}</style>
        <div className="flex flex-wrap justify-around items-center w-3/4 m-auto mt-16">
            <div className="text-left">
                <h2 className="text-left text-4xl underline-after">Invoice #{data.data.ref}</h2>
                <p className="text-left mt-3"><strong>Due Date</strong>: {data.data.date_due}</p>
                <p className="text-left"><strong>Creation Date</strong>: {data.data.invoice_creation}</p>
                <p className="text-left"><strong>Company</strong>: {data.data.company_name}</p>
            </div>
        </div>
        </>
    );
}

export default InvoiceDetails;