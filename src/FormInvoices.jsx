import React, { useState, useEffect } from "react";
import axios from 'axios';

function FormInvoices() {
  const [ref, setRef] = useState("");
  const [dateDue, setDateDue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://api-cogip-329f9c72c66d.herokuapp.com/api/companies');
        setCompanies(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanies();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      ref,
      date_due: dateDue,
      company_name: companyName,
    };

    try {
      const response = await axios.post('https://api-cogip-329f9c72c66d.herokuapp.com/api/add-invoice', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      // Handle success here
    } catch (error) {
      console.error(error);
      // Handle error here
    }

    setRef("");
    setDateDue("");
    setCompanyName("");
  };

  return (
    <form className="mt-2 mb-2 ml-2 mr-2 " onSubmit={handleSubmit}>

      <p className="mt-4 mb-2 text-lg font-bold text-left">New Invoice</p>

      <p className="mb-6 border"></p>
      
      <input
        type="text"
        placeholder="Reference"
        value={ref}
        onChange={(e) => setRef(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <input
        type="date"
        placeholder="Due Date"
        value={dateDue}
        onChange={(e) => setDateDue(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <select
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        {Array.isArray(companies) && companies.map((company) => (
          <option key={company.id} value={company.company_name}>
            {company.company_name}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>

    </form>
  );
}

export default FormInvoices;