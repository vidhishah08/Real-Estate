import React from "react";
import Frame1 from "../Asset/Frame1.png";
import Arrow from "../Asset/arrow-up.png";
import Arrow1 from "../Asset/arrow-down.png"

const Component4=()=>{
    return(
        <div className="mt-[150px] mx-[100px]">
            <div className="flex flex-row " >
                <div className="mr-[100px] ">
                    <p className="text-[58px] font-medium leading-[65px] ">Frequently asked questions customers</p>
                    <img src={Frame1} alt="Frame1" className="mt-[46px]"/>
                </div>
                <div className="w-[900px] pt-[10px] ">
                    <p className="text-[24px] opacity-65">Service provided by real estate professionals to assist potential buyers in the process of finding and buying residential properties such as houses or apartments.</p>
                    <div className=" bg-customBlack mt-[60px] rounded-2xl flex flex-row">
                        <div>
                            <div className="flex flex-row "><p className="text-[24px] text-white font-semibold px-[20px] pt-[15px]">What is included in the home buying service</p><img src={Arrow} alt="Arrow" className="w-[26px] pt-[13px] ml-[10px]"/></div>
                            <p className="opacity-65 text-white px-[20px] pb-[18px]">Covering property search,sceduling visits,negotiation,physical and legal inspections of property,as well assitance to signing deed of sale and purchase at best price especially for first time customers.</p>
                        </div>    
                    </div>
                    <div className="bg-[#F4F4F4] py-[15px] px-[20px] flex flex-row justify-between rounded-2xl mt-[30px]">
                        <p className="text-[22px] font-semibold text-customBlack ">How long does it take home buying process</p>
                        <img src={Arrow1} alt="Arrow1" className="ml-[-5px]"/>
                    </div>
                    <div className="bg-[#F4F4F4] py-[15px] px-[20px] flex flex-row justify-between rounded-2xl mt-[30px]">
                        <p className="text-[22px] font-semibold text-customBlack ">What document are required for the purchase</p>
                        <img src={Arrow1} alt="Arrow1" className="ml-[-5px]"/>
                    </div>
                    <div className="bg-[#F4F4F4] py-[15px] px-[20px] flex flex-row justify-between rounded-2xl mt-[30px]">
                        <p className="text-[22px] font-semibold text-customBlack ">Can I cancel the transaction if I change my mind</p>
                        <img src={Arrow1} alt="Arrow1" className="ml-[-5px]"/>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Component4;