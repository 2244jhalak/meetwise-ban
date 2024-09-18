"use client"
import { usePathname } from 'next/navigation';
import Links from './Links';
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { SiGotomeeting } from "react-icons/si";

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const path = usePathname();
    console.log(path);
    return (
        <div className='flex justify-between items-center'>
            <div onClick={()=>setOpen(!open)} className='container mx-auto p-5 lg:hidden'>
             <p className=''>
                   {open?<FaWindowClose className='text-black'></FaWindowClose>:<FaBars className='text-black'></FaBars>}
             </p>
        </div> 
        <div className='font-semibold flex items-center text-xl space-x-2'>
            <SiGotomeeting className='animate-spin'></SiGotomeeting>
            <h2 className=''>MeetWise</h2>
            
        </div>
        <div className={`${open ?'top-16 block z-50 lg:bg-white md:bg-white bg-slate-200':'-top-72 text-black'} flex lg:flex-row flex-col px-2 py-8 absolute lg:static items-center rounded-b-lg ms-4 duration-1000 lg:gap-12 text-black`}>
        
        
        <Links></Links>
        </div>
            
            
        </div>
    );
};

export default Navbar;