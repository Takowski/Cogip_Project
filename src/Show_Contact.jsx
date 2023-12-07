import React from "react";

function Show_Contact() {
        
  return (
    <div>
      <h2 className='mt-6 mb-6 ml-6 text-xl font-bold yellow-bg'>Bertram Gilfoyle</h2>
      
      <div className="flex justify-between">

        <div>
          <p className="mt-2 ml-6 text-xs font-bold leading-4">Contact: Bertram Gilfoyle</p>
          <p className="ml-6 text-xs font-bold leading-4 ">Phone: 555-555-5555</p>
          <p className="ml-6 text-xs font-bold leading-4 ">Mail: gilfoy@piedpiper.com </p>
          <p className="ml-6 text-xs font-bold leading-4 ">Company: Pied Piper</p>
        </div>

        <div>
          <img className="object-cover mt-[-40px] w-24 h-24 mr-10 rounded-full" src="woman.jpg" alt="bg" />
        </div>

      </div>

    </div>
  );
}

export default Show_Contact;
