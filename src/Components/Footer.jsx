import React from "react";
import Logo from "../Asset/Logo.png"
import Image1 from "../Asset/1.png"
import Image2 from "../Asset/2.png"
import Image3 from "../Asset/3.png"

const Footer=()=>{
    return(
        <div className="mt-[150px] mx-[100px] mb-[80px]">
            <hr className=" border-customBlack"/>
            <div className="mt-[40px]">
                <div className="flex flex-row justify-between">
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
                    <div className="mt-[3px] flex flex-row">
                        <img src={Image1} alt="Image1" className="mr-[11px]"/>
                        <img src={Image2} alt="Image2" className="mr-[11px]"/>
                        <img src={Image3} alt="Image3"/>
                    </div>
                 </div>
            </div>
        </div>
    );
}
export default Footer;