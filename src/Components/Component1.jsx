import React from "react";
import Explore from "../Asset/Explore.png"
import location from "../Asset/location.png"
import calender from "../Asset/calender.png"

const Component1=()=>{
    return(
        <div className="mx-[100px] mt-[70px]">
            <div className=" bg-customBlack w-full  rounded-2xl px-[100px] text-center text-white py-[50px]">
                <p className="text-[70px] font-semibold leading-[80px] ">Mordern built with best eco friendly design and price</p>
                <p className="pt-[28px] opacity-55 text-[20px]">Find a morder building with the best design and price of your dream here.</p>
                <p className="pt-[5px] opacity-55 text-[20px]">Make it a priority where you live very comfortable to live in family.</p>
                <button className="bg-[#2A8EF0] px-[35px] py-[15px] text-white font-bold mt-[36px] rounded-xl text-[20px]">Get started</button>
            </div>
            <div className="flex flex-row">
                <div className=" bg-[#2A8EF0] mt-[20px] w-[500px] h-[460px] rounded-2xl px-[35px] py-[50px]">
                    <div className="flex flex-row justify-between"> 
                        <div className="mr-[90px]"><p className="text-white text-[40px] font-semibold">48K+</p></div>
                        <div className=" text-white opacity-65">
                            <p className="text-[25px]">Property Options</p>
                            <p className="text-[14px]">Property options present a diverse and intriguing landscape of the possibilities within of real estate.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-[20px]"> 
                        <div className="mr-[70px]"><p className="text-white text-[40px] font-semibold">170K+</p></div>
                        <div className=" text-white opacity-65">
                            <p className="text-[25px]">Capital Raised</p>
                            <p className="text-[14px]">The concept of raised capital encapsulates the essence of real estate empowerment business.</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-[20px]"> 
                        <div className="mr-[70px]"><p className="text-white text-[40px] font-semibold">310K+</p></div>
                        <div className=" text-white ">
                            <p className="text-[25px]">Happy Customers</p>
                            <p className="text-[14px] opacity-65">Happy Customers are the driving force behind the continued growth and prosperity of products and services.</p>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#C1C9D2] ml-[20px] w-[800px] h-[460px] mt-[20px] rounded-2xl">
                    <img src={Explore} alt="Explore" className="ml-[670px] mt-[28px]"/>
                    <div className="bg-white mx-[28px] my-[20px] h-[120px] rounded-2xl mt-[188px] px-[10px] py-[10px] bg-opacity-85">
                        <p className="text-[28px] font-semibold px-[10px]">Search for price you are looking for</p>
                        <div className="mt-[10px] flex flex-row justify-between px-[10px]">
                            <div className="flex flex-row bg-white rounded-2xl ">
                                <input className="px-[10px] py-[10px] rounded-2xl w-[200px]" placeholder="Search location"/>
                                <div className=""><img src={location} alt="location " className="w-[20px] py-[10px]  mr-[10px]"/></div>
                            </div>
                            <div className="flex flex-row bg-white rounded-2xl">
                                <input className="px-[10px] py-[10px] rounded-2xl" placeholder="Start date"/>
                                <div className=""><img src={calender} alt="location " className="w-[20px] py-[10px]  mr-[10px]"/></div>
                            </div>
                            <div className="flex flex-row bg-white rounded-2xl">
                                <input className="px-[10px] py-[10px] rounded-2xl" placeholder="End Date"/>
                                <div className=""><img src={calender} alt="location " className="w-[20px] py-[10px]  mr-[10px]"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Component1