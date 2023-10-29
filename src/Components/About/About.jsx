import React from "react"
import aboutUsImage from '../image/About us page-amico.svg'
import choosUsImage from '../image/whyChoosUs.webp'
import noDownpayment from '../image/exchange.png'
import allCashOffer from '../image/dollar.png'
import expertInYourCorner from '../image/rating.png'
import lockedInPricing from '../image/shield.png'

export default function About() {

    return (
        <>
       <div className=" w-full mt-14">
            <div className="m-auto text-center">
                <h4 className=" text-2xl font-bold" >About Us</h4>
            </div>
            <div className="lg:flex lg:flex-wrap lg:mt-10">
        <div>
            <img src={aboutUsImage}
             alt="aboutusImage"
             className="mt-3 m-auto md:w-[25rem] md:h-[25rem] xl:w-[30rem]"
             />
        </div>

        <div className="mt-6 lg:w-96 xl:w-1/2">
            <p className="text-center mx-4 lg:mx-0 xl:mt-10">
            At <span className="text-blue-700 font-bold">Paramth <span className="text-green-700">Group</span></span>, we are more than just a real estate agency; we are your partner in achieving your real estate aspirations. With years of experience and a deep understanding of the market, our dedicated team of professionals is committed to providing you with top-notch service and tailored solutions for all your property needs.
Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we're here to guide you every step of the way. We take pride in our integrity, excellence, and unwavering commitment to ensuring client satisfaction.
Our mission is to turn your real estate goals into reality. We're not just in the business of properties; we're in the business of making dreams come true. Welcome to a world of endless possibilities with <span className="text-blue-700 font-bold">Paramth <span className="text-green-700">Group</span></span>.
            </p>
        </div>
           </div>
        </div>

        <div className="w-full m-auto h-auto mt-40 text-center">
        <div>
            <h3 className=" text-3xl text-center">Why Choos Us?</h3>
        </div>

        <div className="flex flex-wrap ml- w-full m-auto mt-4 xl:mt-14">
            <div className="">
                <img src={choosUsImage}
                 alt="chossusImage"
                 className=" h-[15rem] md:w-[40rem] md:h-[25rem] lg:w-[20rem] lg:h-[25rem] xl:w-[28rem] xl:h-[34rem] 2xl:w-[40rem] 2xl:h-[35rem] 2xl:ml-20"
                  />
            </div>

            <div className="flex flex-wrap w-full md:justify-center lg:w-[30rem] xl:ml-10 xl:w-[32rem]" >
            <div className=" w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center lg:mt-0 xl:w-[14rem]">
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
            <div className=" w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center lg:mt-0 xl:w-[14rem]">
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
            <div className=" w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center xl:w-[14rem]">
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
            <div className=" w-[14rem] h-64 m-auto mt-8 rounded-lg border border-black text-center xl:w-[14rem]">
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
        </>
    )
}