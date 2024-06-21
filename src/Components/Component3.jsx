import React from "react";
import Group1 from "../Asset/Group1.png"
import Group2 from "../Asset/Group2.png"
import Group3 from "../Asset/Group3.png"
import Group4 from "../Asset/Group4.png"

const Component3=()=>{
    return(
        <div className="mt-[150px] mx-[100px]">
            <div className="flex flex-row justify-between">
                <div className="">
                    <p className="text-[48px] font-medium w-[500px] leading-[65px]">Our flagship project with the best design</p>
                </div>
                <div className="">
                    <div className="flex flex-row justify-between pl-[10px]">
                        <button className="bg-customBlack text-white px-[30px] py-[10px] rounded-3xl text-[20px] font-medium mr-[20px]">Resedential</button>
                        <button className="border-[2px] border-customBlack text-customBlack rounded-3xl text-[20px] font-medium px-[30px] py-[10px] mr-[20px]">Workplace</button>
                        <button className="border-[2px] border-customBlack text-customBlack rounded-3xl text-[20px] font-medium px-[30px] py-[10px]">Hospitality</button>
                    </div>
                    <div className="flex flex-row mt-[10px]">
                        <button className="border-[2px] border-customBlack text-customBlack rounded-3xl text-[20px] font-medium px-[30px] py-[10px] mr-[20px]">Business</button>
                        <button className="border-[2px] border-customBlack text-customBlack rounded-3xl text-[20px] font-medium px-[30px] py-[10px] mr-[20px]">Industrial</button>
                        <button className="border-[2px] border-customBlack text-customBlack rounded-3xl text-[20px] font-medium px-[30px] py-[10px] mr-[20px]">Educational</button>
                    </div>
                </div>
            </div>
            <div className=" mt-[50px] flex flex-row w-full justify-between">
                <div className="">
                    <img src={Group1} alt="Group1" className=" w-[900px]" />
                    <div className="flex flex-row justify-between mt-[20px]">
                        <img src={Group2} alt="Group2" className="w-[514px] h-[363px] "/>
                        <img src={Group3} alt="Group3" className="h-[363px]"/>
                    </div>
                </div>
                <div>
                    <img src={Group4} alt="Group4" className=""/>
                </div>
            </div>
        </div>
    );
}

export default Component3;