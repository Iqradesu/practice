import React from 'react'
import Navlinks from './Navlinks'

const MenuOverlay = ({links}) => {
  return (
    <ul className="flex flex-col pb-3 items-center justify-center md:hidden transform mt-1 border-b border-white">
        {links.map((link, index)=>(
                <li key={index}><Navlinks title={link.title} href={link.href}/></li>
        )
        )}
    </ul>
  )
}

export default MenuOverlay
