import React, { useState } from 'react'
import Container from '../layer/Container'
import { HiBars2 } from 'react-icons/hi2'
import { IoCloseSharp, IoSearch } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaAngleRight, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SearchBar = () => {

    let [show, setShow] = useState(false)
    let [open, setOpen] = useState(false)
    let [openCart, setOpenCart] = useState(false)

    return (
        <div className=''>
            <Container>
                <div className='relative flex items-center justify-between py-2 px-3 md:px-0 md:py-6'>
                    <div onClick={() => setShow(!show)}>
                        <Link className='flex items-center gap-2'><HiBars2 />
                            <p className=' font-DM text-sm text-[#767676] hidden md:block'>Shop by Category</p></Link>
                    </div>
                    {/* category dropdown manu start */}
                    <ul className={`w-[263px] absolute top-full left-0 z-10 transition-all duration-300 ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Accesories <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Furniture <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Electronics <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Clothes <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Bags <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                        <li className='group py-4 pl-5 bg-black hover:text-white hover:pl-10 transition-all duration-300'>
                            <Link className='relative font-DM text-sm text-gray-300 block'>Home appliances <span className='absolute right-5 top-1/2 -translate-y-1/2'><FaAngleRight /></span></Link>
                            {/* mega manu start */}
                            <div className=' h-full px-10 py-7 bg-white absolute top-0 left-full flex gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                                <ul className=''>
                                    <li className='pb-4 w-16'><Link className='font-DM font-bold text-[#262626]'>Phone</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 1</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 2</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 3</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 4</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 5</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 6</Link></li>
                                    <li className='pb-2 w-16'><Link className='font-DM text-sm  text-[#767676]'>Phone 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-28'><Link className='font-DM font-bold text-[#262626]'>Computers</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 1</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 2</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 3</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 4</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 5</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 6</Link></li>
                                    <li className='pb-2 w-28'><Link className='font-DM text-sm  text-[#767676]'>Computers 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Smart watches</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Smart watches 7</Link></li>
                                </ul>
                                <ul className=''>
                                    <li className='pb-4 w-32'><Link className='font-DM font-bold text-[#262626]'>Cameras</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 1</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 2</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 3</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 4</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 5</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 6</Link></li>
                                    <li className='pb-2 w-32'><Link className='font-DM text-sm  text-[#767676]'>Cameras 7</Link></li>
                                </ul>
                            </div>
                            {/* mega manu start */}
                        </li>
                    </ul>
                    {/* category dropdown manu start */}
                    <div className='relative w-72 md:w-[601px]'>
                        <input className='py-2 md:py-4 md:pl-5 md:pr-9 pl-3 pr-6 text-[#767676] text-sm outline-none w-full placeholder:text-[#C4C4C4] placeholder:text-sm placeholder:font-DM' type="text" placeholder='Search Products' />
                        <Link><IoSearch className='absolute right-2 md:right-5 top-1/2 -translate-y-1/2' /></Link>
                    </div>
                    <div className='flex items-center gap-10'>
                        <div onClick={() => setOpen(!open)} className='absolute -top-8 right-12 md:static md:top-0 md:right-0 '>
                            <Link className='flex items-center gap-2'><FaUser />
                            <IoMdArrowDropdown /></Link>
                        </div>
                        <div className={`bg-[#F0F0F0] w-[100px] md:w-[200px] absolute -top-3 right-12 md:top-20 md:right-16 z-10 transition-all duration-300  ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                            <Link className='py-1 md:py-2 text-[10px] md:text-sm font-DM font-bold text-[#262626] block text-center transition-all duration-300 hover:text-white hover:bg-[#262626]'>My Account</Link>
                            <Link className='py-1 md:py-2 text-[10px] md:text-sm font-DM font-bold text-[#262626] block text-center transition-all duration-300 hover:text-white hover:bg-[#262626]'>Log Out</Link>
                        </div>
                         <div>
                          <div onClick={() => setOpenCart(!openCart)} className='pl-5 md:pl-0'><Link><FaShoppingCart /></Link></div>
                          <div className={`w-[250px] md:w-[360px] bg-[#F0F0F0] absolute md:top-20 md:right-0 z-10 top-12 right-2 ${openCart ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                            <div className='flex items-center p-4'>
                                <div className='w-10 h-10 md:w-20 md:h-20 bg-gray-300 '></div>
                               <div className='pl-4 pr-12 md:pr-[78px]'>
                               <p className='font-DM font-bold text-[10px] md:text-sm text-[#262626]'>Black Smart Watch</p>
                               <p className='font-DM font-bold text-[10px] md:text-sm text-[#262626]'>$44.00</p>
                               </div>
                               <div onClick={() => setOpenCart(!openCart)}><IoCloseSharp className='cursor-pointer'/></div>
                            </div>
                            <p className='font-DM text-[12px] md:text-[16px] text-[#767676] pl-4 pb-3 md:pb-0 md:py-3'>Subtotal:<span className='font-DM font-bold text-[#262626]'>$44.00</span></p>
                            <div className='flex justify-between px-4 pb-4'>
                                <Link className='font-DM font-bold text-[10px] md:text-sm text-[#262626] py-2 px-6 md:py-4 md:px-10 border border-[#262626] hover:bg-[#262626] hover:text-white block'>View Cart</Link>
                                <Link className='font-DM font-bold text-[10px] md:text-sm text-[#262626] py-2 px-6 md:py-4 md:px-10 border border-[#262626] hover:bg-[#262626] hover:text-white block'>Checkout</Link>
                            </div>
                          </div>
                         </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SearchBar