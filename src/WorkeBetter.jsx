import React from "react";

const WorkBetter = () => {
    return(
        <>
        <div className=" mt-6 flex flex-col md:grid md:grid-cols-2 items-center bg-none md:bg-auto" style={{backgroundImage: "url('./public/FormeBasPage.svg')", backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', backgroundSize:'37%'}}>
            <p className="text-3xl md:text-6xl md:pl-12 font-black uppercase">Work better in your company</p>
            <img className="w-1/2 m-auto p-8" src="./public/workbetter.svg" alt="" />
        </div> 
        </>
    );
};

export default WorkBetter;