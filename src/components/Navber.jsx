import React from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'

import Logo from '/logo.png'
import Li from '../layer/Li'
import { PiDotsNineBold } from 'react-icons/pi'

const Navber = () => {
  return (
  <div className='bg-slate-100'>
   <Container className="flex justify-between items-center py-8 px-3 md:px-0">
    <Img src={Logo} />
    <ul className='w-full gap-10 justify-center hidden md:flex'>
    <Li className="text-[#262626]" listItem="Home" />
    <Li listItem="Shop" />
    <Li listItem="About" />
    <Li listItem="Contacts" />
    <Li listItem="Journal" />
    </ul>

    <div className='block md:hidden'>
    <PiDotsNineBold />
    </div>

   </Container>
  </div>
  )
}

export default Navber