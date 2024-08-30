import React from 'react'
import Img from '../layer/Img'
import p1 from '/prodect/p1.png'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { BiGitCompare } from 'react-icons/bi'
import { IoCart } from 'react-icons/io5'

const Cart = () => {
  return (
    <div>
        <div>
            <div className='relative w-[370px] h-[370px] group'>
                <Img src={p1}/>
                <div className='bg-white w-[370px] absolute -bottom-0 right-0 pr-8 pb-5 pt-6 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                <div className='flex items-center gap-4 justify-end'>
                    <Link>Add to Wish List</Link>
                    <Link><FaRegHeart /></Link>
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
           
            <div className='hover:bg-orange-200 w-[370px] transition-all duration-300'>
                <div className='flex justify-between pt-6 pb-4'>
                  <p className='font-DM font-bold text-xl text-[#262626]'>Basic Crew Neck Tee</p>
                  <p className='font-DM text-[#767676] leading-7'>$44.00</p>
                </div>
                 <Link className='font-DM text-[#767676] leading-7'>Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Cart