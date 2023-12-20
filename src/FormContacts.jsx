import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormContacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companies, setCompanies] = useState([]);

  const submitForm = async (formData) => {
    try {
      const response = await axios.post('https://api-cogip-329f9c72c66d.herokuapp.com/api/add-contact', formData, {
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
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://api-cogip-329f9c72c66d.herokuapp.com/api/companies');
        setCompanies(response.data.data);  // Adjusted this line
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchCompanies();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !companyName) {
      console.error('All fields are required');
      return;
    }

    const formData = {
      name,
      email,
      phone,
      company_name: companyName,
    };

    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 mb-2 ml-2 mr-2">
      <p className="mt-4 mb-2 text-lg font-bold text-left">New Contact</p>
      <p className="mb-6 border"></p>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />


<select
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
  className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
>
  {Array.isArray(companies) && companies.map((company) => (
    <option key={company.id} value={company.company_name}>  {/* Adjusted this line */}
      {company.company_name}  {/* Adjusted this line */}
    </option>
  ))}
</select>
      <button type="submit"
      className="mb-6 shadow-sm bg-violet-400 hover:bg-violet-600 text-white text-sm focus:ring-violet-500 focus:border-violet-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light rounded"
      >Save</button>
    </form>
  );
};

export default FormContacts;