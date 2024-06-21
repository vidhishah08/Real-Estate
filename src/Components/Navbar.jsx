import React from "react";
import Logo from "../Asset/Logo.png"

const Navbar=()=>{
    return(
        <div className="my-[30px] mx-[100px] flex flex-row justify-between">
            <div className="flex flex-row">
                <img src={Logo} alt="Logo"/>
                <p className=" text-customBlack pl-[10px] text-[28px] font-bold">Real Estate</p>
            </div>
            <div className=" text-customBlack font-medium pt-[7px] ml-[-80px]">
                <button className="pt-[5px] px-[20px]">Home</button>
                <button className=" opacity-45 pt-[5px] px-[20px]">About</button>
                <button className=" opacity-45 -[5px] px-[20px]">Services</button>
                <button className=" opacity-45 pt-[5px] px-[20px]">Portfolio</button>
                <button className=" opacity-45 pt-[5px] px-[20px]">FAQ</button>
            </div>
            <div className="mt-[3px]">
                <button className="text-[#2A8EF0]  font-bold border-[#2A8EF0] border-[3px] rounded-lg px-[15px] py-[5px]">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;