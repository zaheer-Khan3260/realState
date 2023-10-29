import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";




export default function Navbar() {
  
 
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
   
return (
    <header className="w-full h-100% z-50">
      <div className="w-full h-12 bg-blue-700 flex flex-wrap md:justify-between md:items-center">

        <div className="mt-1 text-white flex ml-4 md:ml-24">
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="20px" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff" >
          <path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m7 9 5 3.5L17 9">
            </path>
            <path stroke="#ffffff" stroke-width="1.5" d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z">
            </path>
        </svg>
          <h4 className="mt-[0.4rem] text-xs">Example@gmail.com</h4>
        </div>
      <div className="mt-6 text-white ml-[-1rem] flex md:mt-0 md:mr-32">
   
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="24px" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff">
        <path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z">
          </path>
          </svg>
          <h4 className="mt-2 text-xs ">+91 8076904348</h4>
      </div>
      </div>
     
    <nav className=" sticky top-12 border-b-2 lg:border-b-0 w-full h-8 m-auto flex justify-between text-white text-center bg-[#232f3e] lg:h-14">
    
    <div className="h-8 w-60 text-left ml-2 mt-3 lg:mt-6  lg:ml-8 lg:w-full xl:text-center ">
  <h4 className=" text-blue-800 font-bold"> Pamarth <span className="text-green-800">Group</span></h4>
    </div>
    <div className="w-full mt-6 mr-40 md:mr-24 hidden lg:block lg:mr-12 xl:mr-24">
        <ul className="flex justify-end">
            <li>
                <NavLink
                to="/"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/services"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  Services
                </NavLink>
            </li>
    <li>
                <NavLink
                to="/about"
                className={({isActive}) => 
                    `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  About
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  Contact
                </NavLink>
            </li>
        </ul>
    </div>
   
        <div className="z-20 mr-1 w-100% lg:hidden text-end" onClick={toggleClass}>
       
       <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="42px" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="#ffffff">
       <path stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M3 5h8M3 12h13M3 19h18">
       </path>
       </svg>
       </div>      
</nav>
<div   className={`menu-container z-10 w-full text-center bg-[#232f3e] text-white ${isActive ? 'block' : 'hidden'} `}>
<ul className=" justify-end">
            <li className="pt-4">
                <NavLink
                to="/"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600`
                }
                >
                  Home
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/services"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  Services
                </NavLink>
            </li>
    <li>
                <NavLink
                to="/about"
                className={({isActive}) => 
                    `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  About
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/contact"
                className={({isActive}) => 
                `mx-6 text-xl ${isActive ? "text-blue-600" : "text-white"} hover:text-blue-600 `
                }
                >
                  Contact
                </NavLink>
            </li>
        </ul>
</div>

</header>

          

)

}