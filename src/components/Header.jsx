
import React, { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { NavLink  } from "react-router-dom";
import { usecart } from "../context/Context";
export const Header = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const active  = "text-white bg-gray-700 border -blue-700 hover:bg-gray-700 hover:border-gray-700 rounded-md p-2";
    const inactive  = "text-base bg-white-500 p-2"
    const {cartlist} = usecart()
    return (
        <nav
            className="flex items-center justify-between w-full relative bg-white boxShadow rounded-md px-[10px] py-[8px]  border ">
        
                <NavLink to='/' className="flex justify-center items-center gap-2" >
                <img src={'/logo.png'} alt="eshop" className="w-[55px] " /> 
                <span className="text-xl font-medium">Musizone</span>
                </NavLink>
          
            
            <div className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <NavLink to={'/'} className={({ isActive})=>isActive ? active:inactive }>home</NavLink>
                <NavLink to={`/cart`} className={({ isActive})=>isActive ? active:inactive}>Cart</NavLink>
            </div>

            <div className="items-center gap-[10px] flex">
                <span
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">Cart-{cartlist.length}
                </span>


                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                
                <div className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <NavLink to={'/'} className={({ isActive})=>{isActive ? active:inactive } }>home</NavLink>
                    <NavLink to={`cart`}className={({ isActive})=>{isActive ? active:inactive } }>Cart
                    </NavLink>
                    
                </div>
            </aside>
        </nav>
    );
};


