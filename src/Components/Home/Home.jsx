import React from "react";
import { useEffect } from "react";
import propertySearchImage from "../image/valuation.png"
import exportGuidance from "../image/business-analyst.png"
import financialSupport from "../image/operator.png"
import listingProperty from "../image/computer.png"
import marketAnalysis from "../image/analytics.png"
import negotiationSkill from "../image/negotiate.png"
import serviceImage from "../image/sevicesImageForLaptop.webp"
import choosUsImage from '../image/whyChoosUs.webp'
import noDownpayment from '../image/exchange.png'
import allCashOffer from '../image/dollar.png'
import expertInYourCorner from '../image/rating.png'
import lockedInPricing from '../image/shield.png'
import aboutUsImage from '../image/About us page-amico.svg'
import contactImage from '../image/Contact.svg'



export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const elements = document.querySelectorAll('.animation');
    
        elements.forEach((el) => {
          observer.observe(el);
        });
    
        // Clean up the observer when the component unmounts
        return () => {
          elements.forEach((el) => {
            observer.unobserve(el);
          });
        };
      }, []);

return (
    <div className="w-full  ">
        <div className="relative">
        <img src="https://vilmate.com/wp-content/uploads/2019/09/How-to-develop-a-real-estate-website-and-how-much-it-will-cost_1.jpg"
         alt="image"
        className="w-full h-[40rem] opacity-90"
        />
        </div>
  
<div className=" animation z-10 absolute top-64 left-0 w-full h-full text-center m-auto">
            <p className="text-white text-xl m-auto w-[90%] font-bold md:text-3xl xl:w-[70%]">
            Discover your dream home for sale in <span className="text-blue-800">NorthEast Delhi</span> with our premier real estate website
            </p>
        </div>

        <div className=" animation z-10 bg absolute top-96 left-0 w-full text-center lg:top-80">
            <p className="text-white text-sm m-auto w-2/3 mt-1 md:w-[70%] md:mt-2 md:text-sm lg:text-l lg:mt-8 xl:w-2/4 xl:text-xl">
            Top real estate agents in NorthEast Delhi helping homebuyers and sellers save money and make better decisions.
            </p>
        </div>
  {/* sevices container start */}
        <div className=" animation services-discrip-text-cont w-full mt-14 h-100% mx-auto flex flex-wrap text-center justify-center ">
        <div className=" w-full font-semibold lg:w-96 xl:w-1/2 xl:mt-12 2xl:w-2/6">
            <div>
                <h4 className="animation text-blue-900 mt-4 text-2xl">Our Services</h4>
            </div>
            <div className="p-4 animation">
            At Paramth Groupe, we offer a comprehensive range of services to make your real estate journey a seamless and rewarding experience.
            Whether you're a first-time homebuyer, an experienced investor, or looking to sell your property, our team of dedicated professionals is here to assist you every step of the way.
            </div>
        </div>
        <div className="animation w-96 h-auto hidden lg:block xl:w-[30rem]">
            <img src={serviceImage} alt="Image" />
        </div>
     <div className="w-full h-auto flex flex-wrap xl:w-[80%] 2xl:w-[60%]">
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg hover:bg-blue-400 hover:text-white ">
                <div className=" w-full text-center">
                    <img src = {propertySearchImage}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className=" font-semibold">
                        Property Search
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    Our advanced search tools help you find your dream home with ease. Filter listings based on your preferences, from location and price range to property type and amenities.
                    </p>
                </div>
            </div>
            <div className="animation service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white ">
                <div className=" w-full text-center">
                    <img src = {exportGuidance}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className=" font-semibold">
                    Expert Guidance
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    Our real estate experts provide personalized advice, helping you make informed decisions, negotiate deals, and secure the best possible purchase.
                    </p>
                </div>
            </div>
            <div className="animation service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
                <div className=" w-full text-center">
                    <img src = {financialSupport}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className="font-semibold">
                    Financing Assistance
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    We connect you with trusted mortgage providers and financial experts to help you secure the right financing for your purchase.
                    </p>
                </div>
            </div>
            <div className="animation service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
                <div className=" w-full text-center">
                    <img src = {listingProperty}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className="font-semibold">
                    Listing Your Property
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    We showcase your property with high-quality photographs and detailed descriptions, reaching a wide network of potential buyers.
                    </p>
                </div>
            </div>
            <div className="animation service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
                <div className=" w-full text-center">
                    <img src = {marketAnalysis}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className="font-semibold">
                    Market Analysis
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    Our team conducts thorough market analysis to determine the optimal listing price, ensuring your property's competitive edge.
                    </p>
                </div>
            </div>
            <div className="animation service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
                <div className=" w-full text-center">
                    <img src = {negotiationSkill}
                     alt=""
                     className= " w-12 h-12 m-auto mt-6"
                      />
                </div>
                <div className=" mt-8">
                    <h5 className="font-semibold">
                    Negotiation Skills
                    </h5>
                </div>
                <div className=" mt-6">
                    <p className="mx-2 text-sm">
                    We negotiate on your behalf, aiming to get the best value for your property in a timely manner.
                    </p>
                </div>
            </div>
     </div>

      </div>
      {/* sevices container end */}
 {/* Choos us container start */}

       <div className="w-full m-auto h-auto mt-40 text-center">
        <div>
            <h3 className="animation text-3xl text-center">Why Choos Us?</h3>
        </div>

        <div className="flex flex-wrap  w-full m-auto mt-4 xl:mt-14 xl:justify-center">
            <div className="">
                <img src={choosUsImage}
                 alt="chossusImage"
                 className="animation h-[15rem] md:w-[40rem] md:h-[25rem] lg:w-[20rem] lg:h-[25rem] xl:w-[28rem] xl:h-[34rem] 2xl:w-[40rem] 2xl:h-[35rem] 2xl:ml-20"
                  />
            </div>

            <div className="flex flex-wrap w-full md:justify-center lg:w-[30rem] xl:ml-10 xl:w-[32rem]" >
            <div className="animation w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center lg:mt-0 xl:w-[14rem]">
                <div >
                    <img src={noDownpayment}
                     alt="noDownPayment"
                     className=" w-12 h-12 text-center m-auto mt-3"
                     />
                     <div className="mt-7">
                        <h4 className=" text-lg">No Downpayment</h4>
                     </div>
                     <div className="mt-4 mx-4">
                        <p className=" text-sm">You don't need to provide an initial financial contribution or deposit, allowing you to acquire or access something without upfront costs or fees.</p>
                     </div>
                </div>
            </div>
            <div className="animation w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center lg:mt-0 xl:w-[14rem]">
                <div >
                    <img src={allCashOffer}
                     alt="noDownPayment"
                     className=" w-12 h-12 text-center m-auto mt-3"
                     />
                     <div className="mt-7">
                        <h4 className=" text-lg">All Cash Offer</h4>
                     </div>
                     <div className="mt-4 mx-4 xl:mx-1">
                        <p className=" text-sm"> Refers to a payment approach that relies solely on cash, with no financing or credit involved. It often simplifies transactions and may secure favorable terms.</p>
                     </div>
                </div>
            </div>
            <div className="animation w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center xl:w-[14rem]">
                <div >
                    <img src={expertInYourCorner}
                     alt="noDownPayment"
                     className=" w-12 h-12 text-center m-auto mt-3"
                     />
                     <div className="mt-7">
                        <h4 className=" text-lg">Expert In Your Corner</h4>
                     </div>
                     <div className="mt-2 mx-3">
                        <p className=" text-sm">Having a knowledgeable professional supporting and advising you in a particular field, providing guidance and expertise to achieve success or make informed decisions.</p>
                     </div>
                </div>
            </div>
            <div className="animation w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center xl:w-[14rem]">
                <div >
                    <img src={lockedInPricing}
                     alt="noDownPayment"
                     className=" w-12 h-12 text-center m-auto mt-3"
                     />
                     <div className="mt-7">
                        <h4 className=" text-lg">Locked In Pricing</h4>
                     </div>
                     <div className="mt-2 mx-3 xl:mx-1">
                        <p className=" text-sm">A specified price remains fixed, unaffected by market fluctuations or changes, offering price stability and predictability for goods or services over a defined period.</p>
                     </div>
                </div>
            </div>
         </div>

        </div>
       </div>
       {/* Choos us container end */}

 {/* about us container start */}
       <div className=" w-full mt-32">
            <div className="m-auto text-center">
                <h4 className="animation text-2xl font-bold" >About Us</h4>
            </div>
            <div className=" animation lg:flex lg:flex-wrap lg:mt-10 xl:justify-center">
        <div>
            <img src={aboutUsImage}
             alt="aboutusImage"
             className="mt-3 m-auto md:w-[25rem] md:h-[25rem] xl:w-[30rem]"
             />
        </div>

        <div className="mt-6 lg:w-96 xl:w-1/2">
            <p className="text-center mx-4 lg:mx-0 xl:mt-10">
            At <span className="animation text-blue-700 font-bold">Paramth <span className="text-green-700">Group</span></span>, we are more than just a real estate agency; we are your partner in achieving your real estate aspirations. With years of experience and a deep understanding of the market, our dedicated team of professionals is committed to providing you with top-notch service and tailored solutions for all your property needs.
Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we're here to guide you every step of the way. We take pride in our integrity, excellence, and unwavering commitment to ensuring client satisfaction.
Our mission is to turn your real estate goals into reality. We're not just in the business of properties; we're in the business of making dreams come true. Welcome to a world of endless possibilities with <span className="text-blue-700 font-bold">Paramth <span className="text-green-700">Group</span></span>.
            </p>
        </div>
           </div>
        </div>

 {/* about us container end */}

 {/* Contact us container start  */}

 <div className="">
        <div className="w-1/2 m-auto mt-20 text-center">
             <div>
                <h3 className="animation text-2xl lg:text-4xl">Contact Us</h3>
             </div>
         </div>
        
         <div className="flex flex-wrap-reverse mt-10 m-auto md:mt-0 lg:m-0 lg:ml-2 lg:mt-10 xl:ml-10 xl:justify-center">
             <div className="animation h-[26rem] mt-10 border border-black m-auto w-[15rem] rounded-xl relative lg:w-[18rem] lg:m-0 lg:ml-10 xl:ml-20 xl:w-[23rem]">
                <input
                id="Name"
                 type="text"
                 placeholder="Name"
                 className="input w-[10rem] mt-10 ml-5 h-10 pt-4 pl-2 border-2 border-black rounded-lg lg:w-5/6"
                 />
                 <label htmlFor="Name" className="name-label top">Name</label>
                <input
                id="Email"
                 type="email"
                 placeholder="Email"
                 className="email w-[10rem] mt-8 ml-5 h-10 pt-4 pl-2 border-2 border-black rounded-lg lg:w-5/6"
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
            
             <div className="animation m-auto w-[15rem] md:w-[20rem] lg:m-0 lg:w-1/2 lg:ml-10 xl:w-[45rem]">
                <img
                 src={contactImage}
                 alt=""
                 className=" w-[15rem] md:w-[20rem] lg:w-full lg:h-5/6 xl:w-[40rem] xl:h-[25rem]"
                 />
             </div>
      </div>       
      
       </div>
 {/* Contact us container end */}
</div>

)

}