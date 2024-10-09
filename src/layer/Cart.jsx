import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { BiGitCompare } from 'react-icons/bi'
import { IoCart } from 'react-icons/io5'

const Cart = ({className , src , productName , productPrice , brand ,offer}) => {
  let [like, setLike] = useState(false)
  return (
    <div className={`w-[370px] ${className}`}>
      <div className='relative w-full h-[370px] group'>
        <img className='w-full h-full object-cover' src={src} />
        <p className='absolute top-5 left-5 text-white text-xs font-bold px-8 py-2 bg-black'>{offer}</p>
        <div className='bg-white w-full absolute -bottom-0 right-0 pr-8 pb-5 pt-6 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
          <div className='flex items-center gap-4 justify-end'>
            <Link>Add to Wish List</Link>
            <Link onClick={() => setLike(!like)}><FaRegHeart className={` ${like ? "text-red-800" : "text-[#767676]"}`} /></Link>
          </div>
          <div className='flex items-center gap-4 justify-end py-5'>
            <Link>Compare</Link>
            <Link><BiGitCompare /></Link>
          </div>
          <div className='flex items-center gap-4 justify-end'>
            <Link>Add to Cart</Link>
            <Link><IoCart /></Link>
          </div>
        </div>
      </div>

      <div className='hover:bg-orange-200 w-full p-5 transition-all duration-300'>
        <div className='flex justify-between pt-6 pb-4'>
          <p className='font-DM font-bold text-xl text-[#262626]'>{productName}</p>
          <p className='font-DM text-[#767676] leading-7'>{productPrice}</p>
        </div>
        <Link className='font-DM text-[#767676] leading-7'>{brand}</Link>
      </div>
    </div>
  )
}

export default Cart