import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Bredcumb = () => {
  return (
    <div>
        <h2 className='text-[#262626] font-DM font-bold text-5xl capitalize'>{window.location.pathname.split("/")[1]}</h2>
        <p className='flex items-center text-[#767676] font-DM text-[12px] pt-3 gap-2'>
            <span>Home</span> <MdKeyboardArrowRight /> <span>{window.location.pathname.split("/")[1]}</span>
        </p>
    </div>
  )
}

export default Bredcumb