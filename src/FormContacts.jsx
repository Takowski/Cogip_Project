import React from "react";

function FormContacts() {
  
  return (
    <form className="mt-2 mb-2 ml-2 mr-2">

      
<p className="mt-4 mb-2 text-lg font-bold text-left">New Contact</p>

<p className="mb-6 border"></p>
      
      <input
        type="text"
        placeholder="Name"
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <input
        type="number"
        placeholder="Phone Number"
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <input
        type="text"
        placeholder="Mail"
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

      <input
        type="text"
        placeholder="Company Name"
        className=" mb-6 shadow-sm bg-neutral-100 border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />
      {/* Put an array wuth all the companies here */}

      <input
        type="submit"
        value="Save"
        className="shadow-sm bg-violet-300 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      />

    </form>
  );
}

export default FormContacts;
  