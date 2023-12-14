import React from "react";

function FormCompanies() {
  return (
    <form className="">
      <input
        type="text"
        placeholder="Name"
        className=""
      />

      <input
        type="text"
        placeholder="TVA"
        className=""
      />

      <input
        type="text"
        placeholder="Country"
        className=""
      />

      <input
        type="text"
        placeholder="Type (Client/Supplier)"
        className=""
      />

      <input
        type="submit"
        value="Save"
        className=""
      />
    </form>
  );
}

export default FormCompanies;
