import React from "react";
import Arrow from "../Asset/arrow-right.png"

const Component2=()=>{
    return(
        <div className="flex flex-row mt-[150px] mx-[100px] justify-between">
            <div className="w-[600px]">
                <p className="text-[48px] font-semibold leading-[55px]">Benefits after making purchase at us?</p>
                <p className="text-[20px] pt-[30px] opacity-65">Buying a house with cash saves you from paying interest that is usually associated with the debts of the bank</p>
                <button className="flex flex-row text-[#2A8EF0] justify-between text-[20px] font-semibold my-[25px]"><h1>See more</h1><img src={Arrow} className="w-[20px] pt-[8px]" /></button>
                <div className=" bg-[#C1C9D2] w-full h-[360px] rounded-2xl"></div>
            </div>
            <div className="w-[650px] rounded-2xl bg-[#C1C9D2]">

            </div>
        </div>
    );
}

export default Component2;