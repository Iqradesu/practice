import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import PopularVisits from '@/components/PopularVisits';
import { FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className='bg-bannerImg bg-no-repeat bg-cover bg-bottom'>
        <div className='w-full h-screen flex items-end bg-blackOverlay'>
          <div className=' mx-8 mb-40'><h4 className='text-white text-4xl md:text-7xl'>Explore<br/>Asia's Beauty</h4>
          <p className='text-white w-full max-w-2xl my-8'>
            Uncover Asia’s stunning landscapes, from majestic mountains to serene beaches. Your adventure begins here.
          </p>
          <Link href={'/'}><button className='bg-white hover:bg-[#b99566] text-black uppercase font-normal md:font-semibold  px-6 py-4 rounded-full transition transform duration-500'>get started<FaArrowRightLong className='inline-flex m-1 text-md'/></button></Link>
          </div>
        </div>
      </section>
      <PopularVisits />
    </div>
    
  )
}

export default page
