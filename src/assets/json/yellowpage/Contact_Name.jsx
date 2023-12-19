import React from "react";
function Contact_Name({ data }) {
    console.log(data);
    if (!data) {
        return <p>Loading...</p>;
      }

    const names = data.data.name.split(' ');
    const initials = names.map(name => name.charAt(0)).join('.');

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
                <h2 className="text-left text-4xl underline-after">{data.data.name}</h2>
                <p className="text-left mt-3 text-lg"><strong>Contact</strong>: {data.data.name}</p>
                <p className="text-left text-lg"><strong>Phone</strong>: {data.data.phone}</p>
                <p className="text-left text-lg"><strong>Mail</strong>: {data.data.email}</p>
                <p className="text-left text-lg"><strong>Company</strong>: {data.data.company_name}</p>
            </div>

            <div className="w-36 h-36 rounded-full bg-yellow-300 flex justify-center items-center">
                <p className="text-6xl font-black">{initials}</p>
            </div>
        </div>
        </>


    );
  }
export default Contact_Name;