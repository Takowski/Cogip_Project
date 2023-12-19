import axios from 'axios';
import React, { useState } from 'react';

const FormCompanies = () => {
  const [name, setName] = useState("");
  const [tva, setTva] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");

  const countries = ['Belgium', 'UK', 'France', 'Germany', 'Spain'];
  const types = ['Client', 'Supplier'];

  const submitForm = async (formData) => {
    try {
      const response = await axios.post('https://api-cogip-329f9c72c66d.herokuapp.com/api/add-company', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);

    } catch (error) {
      console.error(error);

    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !tva || !country || !type) {
      console.error('All fields are required');
      return;
    }

    const formData = {
      company_name: name,
      tva,
      country,
      type_name: type,
    };

    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 mb-2 ml-2 mr-2">

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <input
        type="text"
        placeholder="TVA"
        value={tva}
        onChange={e => setTva(e.target.value)}
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <select
        value={country}
        onChange={e => setCountry(e.target.value)}
        className="mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        value={type}
        onChange={e => setType(e.target.value)}
        className="mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      >
        <option value="">Select a type</option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormCompanies;