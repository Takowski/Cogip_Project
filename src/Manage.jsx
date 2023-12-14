import React from "react";

const Manage = () => {
    return (
        <>
        <div className="flex flex-col md:grid md:grid-cols-2 items-center bg-yellow-300">
            <p className="text-3xl md:text-6xl md:pl-8 font-black  uppercase">Manage your customers and invoices easly</p>
            <img src="./public/manage.svg" alt="" />
        </div>
        </>
    );  
};
export default Manage;