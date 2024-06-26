"use client"
import React, {useState} from "react"
import { AiOutlineMenu, AiOutlineHome} from "react-icons/ai"
import { RiCustomerService2Fill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { BsPerson} from "react-icons/bs"

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav} href="/#" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav} href="/about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <FcAbout size={20}/>
                            <span className="pl-4">About</span>
                        </a>
                        <a onClick={handleNav} href="/service" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <RiCustomerService2Fill size={20}/>
                            <span className="pl-4">Service</span>
                        </a>
                        <a onClick={handleNav} href="/teams" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsPerson size={20}/>
                            <span className="pl-4">Teams</span>
                        </a>
                       
                    </div>
                )
                : (
                ''
                )}
                {/* <div className="md:block hidden fixed top-[25%] z-10">
                    <div className="flex flex-col">
                        <a href="/#" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineHome size={20} />
                        </a>
                        <a href="/about" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FcAbout size={20} />
                        </a>
                        <a href="/service" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiCustomerService2Fill size={20} />
                        </a>
                        <a href="/teams" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsPerson size={20} />
                        </a>
                       
                        
                    </div>
                </div> */}
        </div>
    );
};

export default Sidenav