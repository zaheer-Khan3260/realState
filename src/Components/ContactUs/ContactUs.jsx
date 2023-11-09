import React from "react";

import contactImage from '../image/Contact.svg'

export default function Contact() {

    return (
       <div className="">
        <div className="w-1/2 m-auto mt-20 text-center">
             <div>
                <h3 className="text-2xl lg:text-4xl">Contact Us</h3>
             </div>
         </div>
         <div className="flex flex-wrap mt-10 m-auto md:mt-0 lg:m-0 lg:ml-10 lg:mt-10 xl:ml-20">
             <div className=" m-auto w-[15rem] md:w-[20rem] lg:m-0 lg:w-1/2">
                <img
                 src={contactImage}
                 alt=""
                 className=" w-[15rem] md:w-[20rem] lg:w-full xl:w-5/6"
                 />
             </div>

             <div className=" h-[26rem] mt-10 border border-black m-auto w-[20rem] rounded-xl relative lg:w-[18rem] lg:m-0 lg:ml-10 xl:ml-20 xl:w-[23rem]">
                <input
                id="Name"
                 type="text"
                 placeholder="Name"
                 className="input w-[10rem] mt-10 ml-5 h-10  pl-2 border-2 border-black rounded-lg lg:w-5/6"
                 />
                 <label htmlFor="Name" className="name-label">Name</label>
                <input
                id="Email"
                 type="email"
                 placeholder="Email"
                 className="email w-[10rem] mt-8 ml-5 h-10  pl-2 border-2 border-black rounded-lg lg:w-5/6"
                 />
                 <label htmlFor="Name" className="email-label">Email</label>
                
                 <textarea
                id="message"
                 name="message"
                 placeholder="Message"
                 className="email mt-4 ml-5 h-40 pt-4 pl-2 border border-black rounded-lg"
                 />
                <div className="mt-3 ml-8">
                 <button type="submit" className="border border-blue-800 pt-4 w-28 rounded-lg bg-blue-700 text-white">
                    Submit
                 </button>
                 </div>
             </div>
      </div>       
      
       </div>
    )
}