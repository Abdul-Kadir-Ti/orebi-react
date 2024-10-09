import React, { useState } from 'react'
import Container from '../layer/Container'
import Bredcumb from '../layer/Bredcumb'
import Paginate from '../layer/Paginate'
import { Link } from 'react-router-dom'
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { BiSolidGridAlt } from 'react-icons/bi'
import { FaList } from 'react-icons/fa'


const Products = () => {

  const [itemsPerPage, setItemsPerPage] = useState(12);

  const manageItemsPerPage = (e) => {
    setItemsPerPage(Number(e.target.value));
  }

  let [color, setColor] = useState(true)
  let [category, setCatagory] = useState(true)
  let [brand, setBrand] = useState(true)
  let [price, setPrice] = useState(true)
  return (
    <div>
      <Container>
        <Bredcumb />
        <div className='grid grid-cols-4 gap-4 pt-32'>
          <div className='col-span-1'>
            <ul className='flex flex-col gap-12'>
              <li onClick={() => setCatagory(!category)}>
                <Link className='flex items-center justify-between font-DM font-bold text-xl text-[#262626]'>Shop by Category <span className='pr-4'>
                  <MdOutlineArrowDropDown className='absolute' />
                  <MdArrowDropUp className='absolute' />
                </span></Link>
                <ul className={`flex flex-col gap-5 ${category ? "hidden" : "visible"}`}>
                  <li className='pt-8'>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Category 1</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Category 2</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Category 3</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Category 4</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Category 5</Link>
                  </li>
                </ul>
              </li>
              <li onClick={() => setColor(!color)} className=''>
                <Link className='font-DM font-bold text-xl text-[#262626]'>Shop by Color</Link>
                <ul className={`flex flex-col gap-5 ${color ? "hidden" : ""}`}>
                  <li className='pt-8'>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Color 1</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Color 2</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Color 3</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Color 4</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Color 5</Link>
                  </li>
                </ul>
              </li>
              <li onClick={() => setBrand(!brand)}>
                <Link className='font-DM font-bold text-xl text-[#262626]'>Shop by Brand</Link>
                <ul className={`flex flex-col gap-5 ${brand ? "hidden" : "visible"}`}>
                  <li className='pt-8'>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Brand 1</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Brand 2</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Brand 3</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Brand 4</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>Brand 5</Link>
                  </li>
                </ul>
              </li>
              <li onClick={() => setPrice(!price)}>
                <Link className='font-DM font-bold text-xl text-[#262626]'>Shop by Price</Link>
                <ul className={`flex flex-col gap-5 ${price ? "hidden" : "visible"}`}>
                  <li className='pt-8'>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>$0.00 - $9.99</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>$10.00 - $19.99</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>$20.00 - $29.99</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>$30.00 - $39.99</Link>
                  </li>
                  <li>
                    <Link className='font-DM font-normal text-base leading-8 text-[#767676]'>$40.00 - $69.99</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='col-span-3'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-5'>
                <BiSolidGridAlt className='' />
                <FaList className='' />
              </div>
              <div className='flex items-center gap-10'>
                <div className='flex gap-6'>
                  <h3 className='font-DM font-normal text-base text-[#262626]'>Sort by:</h3>
                  <select className='w-[240px] font-DM font-normal text-base leading-8 text-[#767676] outline-none' name="" id="">
                    <option className='pt-1 px-5' value="Featured">Featured</option>
                    <option value="Featured 2">Featured 2</option>
                    <option value="Featured 3">Featured 3</option>
                    <option value="Featured 4">Featured 4</option>
                  </select>
                </div>
                <div className='flex gap-6'>
                  <h3 className='font-DM font-normal text-base text-[#262626]'>Show:</h3>
                  <select className='w-[140px] font-DM font-normal text-base leading-8 text-[#767676] outline-none' onChange={manageItemsPerPage} name="" id="">
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <Paginate itemsPerPage={itemsPerPage} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Products