import React from "react";
import propertySearchImage from "../image/valuation.png"
import exportGuidance from "../image/business-analyst.png"
import financialSupport from "../image/operator.png"
import listingProperty from "../image/computer.png"
import marketAnalysis from "../image/analytics.png"
import negotiationSkill from "../image/negotiate.png"
import serviceImage from "../image/sevicesImageForLaptop.webp"

export default function Services(){
    return (
      <div className=" services-discrip-text-cont w-full h-100% mx-auto flex flex-wrap text-center justify-center ">
        <div className=" w-full font-semibold lg:w-96 xl:w-1/2 xl:mt-12 2xl:w-2/6">
            <div>
                <h4 className="text-blue-900 mt-4">Our Services</h4>
            </div>
            <div className="p-4">
            At Paramth Groupe, we offer a comprehensive range of services to make your real estate journey a seamless and rewarding experience.
            Whether you're a first-time homebuyer, an experienced investor, or looking to sell your property, our team of dedicated professionals is here to assist you every step of the way.
            </div>
        </div>
        <div className=" w-96 h-auto hidden lg:block xl:w-[30rem]">
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
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white ">
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
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
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
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
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
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
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
            <div className="service-cont w-60 h-72 m-auto mt-12 rounded-lg  hover:bg-blue-400 hover:text-white  ">
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
    )
}

export {propertySearchImage, exportGuidance, financialSupport, listingProperty,
marketAnalysis, negotiationSkill, serviceImage}