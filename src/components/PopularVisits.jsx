import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopularVisits = () => {
  return (
  <section  id='populars' className='mx-5 my-3 md:mx-15 lg:mx-32 md:my-14'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div>
        <h1 className='text-2xl md:text-5xl mb-3 font-semibold flex justify-center md:justify-start '>Popular Visits</h1>
        <p className='text-md font-light mt-5 '>Discover Asia's top destinations, from the serene beaches of Bali to the vibrant streets of Tokyo. These popular spots offer the perfect mix of culture, adventure, and stunning scenery.</p>
        <Link className='flex justify-center' href={"/"}><button className='bg-white rounded-full  text-black font-light border border-black px-10 py-3 my-4 w-full md:w-auto hover:bg-black transform transition duration-500 hover:text-white'>plan your trip</button></Link>

        <div className='relative overflow-hidden rounded-2xl shadow-dark-xl'>
          <div className='w-full mx-auto h-full md:h-full '>
            <Image src={"/GrandPalace.jpg"} alt={"cappadocia scenery"} width={500} height={500} className='w-full h-full  transform transition hover:scale-110 duration-300 '/>
            <div className="absolute inset-0 bg-black-Overlay pointer-events-none text-white p-5 flex items-end text-xl md:text-2xl">GrandPalace<span className='text-xs text-slate-300 m-1 '>Thailand</span></div>
          </div>
          </div>
</div>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-3 h-full'>

          <div className='relative overflow-hidden rounded-2xl shadow-dark-xl'>
            <Image src={"/Tajmahal.jpg"} alt={"Tajmahal"} width={500} height={500} className='w-full h-full  transform transition hover:scale-110 duration-300 '/>
            <div className="absolute inset-0 bg-black-Overlay pointer-events-none text-white p-5 flex items-end text-xl md:text-2xl">Tajmahal<span className='text-xs text-slate-300 m-1'>India</span></div>
          </div>
          <div className='relative overflow-hidden rounded-2xl shadow-dark-xl'>
            <Image src={"/beach.jpg"} alt={"beach img"} width={500} height={500} className='w-full h-full transform transition hover:scale-110 duration-300'/>
            <div className="absolute inset-0 bg-black-Overlay pointer-events-none text-white p-5 flex items-end text-xl md:text-2xl">Bali beach<span className='text-xs text-slate-300 m-1'>Indonesia</span></div>
          </div>
          <div className='grid grid-cols-1'>
            <div className='relative overflow-hidden rounded-2xl shadow-dark-xl'>
            <Image src={"/Padarisland.jpg"} alt={"padarisland scenery"} width={500} height={500} className='w-full h-full transform transition hover:scale-110 duration-300'/>
            <div className="absolute inset-0 bg-black-Overlay pointer-events-none text-white p-5 flex items-end text-xl md:text-2xl">PadarIsland<span className='text-xs text-slate-300 m-1'>Indonesia</span></div>
          </div>
          </div>
          </div>
      </div>
      <Link className='flex justify-center mt-7' href={"/"}><button className='border border-black text-lg rounded-full px-10 py-3 transform transition duration-500 font-medium hover:bg-black hover:text-white '>View all destinations</button></Link>
    </section>
  )
}

export default PopularVisits
