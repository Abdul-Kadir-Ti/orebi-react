import React, { useEffect, useState } from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'

import Logo from '/logo.png'
import Li from '../layer/Li'
import { PiDotsNineBold } from 'react-icons/pi'

const Navber = () => {

  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    function size() {
      if (window.innerWidth < 768) {
        setOpen(false)
      }else {
        setOpen(true)
      }
    }
    size()
  }, [])
  return (
  <div className='bg-slate-100'>
   <Container className="relative flex justify-between items-center py-4 md:py-8 px-3 md:px-0">
    <Img src={Logo} />
    <ul className={`w-full gap-x-10 justify-center absolute md:static md:flex z-50 top-full right-0 p-3 md:p-0 text-white text-right bg-[#eeeeee] md:bg-transparent transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
    <Li className="text-[#262626]" listItem="Home" />
    <Li listItem="Shop" />
    <Li listItem="About" />
    <Li listItem="Contacts" />
    <Li listItem="Journal" />
    </ul>

    <div onClick={() => setOpen(!open)} className='block md:hidden'>
    <PiDotsNineBold />
    </div>

   </Container>
  </div>
  )
}

export default Navber