'use client';
import React, { useState} from 'react'
import Navlinks from './Navlinks'
import { HiOutlineXMark, HiMiniBars3 } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';

const navlinks = [

    {title:"HOME", href:"/"},
    {title:"ABOut", href:"/"},
    {title:"popular", href:"#populars"},
    {title:"CONTACT", href:"/"},
    {title:"PACKAGES", href:"/"}

]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen]= useState(false);

  return (
    <header className='fixed left-0 right-0 py-4 z-50 '>
        <div className='block md:hidden px-8 '>
            {
                !navbarOpen ? (
                    <button className='border transition-all hover:border-slate-300 border-white rounded-sm px-3 py-2 hover:text-slate-300 text-white' onClick={()=>setNavbarOpen(true)}><HiMiniBars3 className='h-5 w-5'/></button>
                ):(
                    <button className='border transition-all border-white rounded-sm px-3 py-2 text-white' onClick={()=>setNavbarOpen(false)}><HiOutlineXMark className=' h-5 w-5'/></button>
                )

            }
        </div>
        <nav className='flex justify-center items-center'>
        <div className='hidden md:block'>
            <ul className='flex'>{navlinks.map((link, index)=>{
                return(
                    <Navlinks  key={index}  href={link.href} title={link.title}/>
                )
            })}</ul>
        </div>
        <div className={`${!navbarOpen?'h-0':'h-72'} overflow-hidden transition-all duration-500 ease-in-out w-full md:w-auto md:h-auto`}>
            <MenuOverlay links={navlinks}/>
        </div>
        {/* <div>{navbarOpen? <MenuOverlay links={navlinks}/> :null}</div> */}
    </nav>
    </header>
  )
}

export default Navbar
