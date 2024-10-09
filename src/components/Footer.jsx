import React from 'react'
import Container from '../layer/Container'
import Li from '../layer/Li'
import Img from '../layer/Img'
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='pt-36'>
        <Container>
          <div className='flex'>
          <div className='flex gap-36 pt-14'> 
                <ul className='font-DM text-sm text-[#6D6D6D] flex flex-col gap-y-2'>
                   <div className='pb-4'> 
                   <Li className=" font-bold text-[16px] leading-[23px] text-[#000000]" listItem="MANU"/>
                   </div>
                    <Li listItem="Home"/>
                    <Li listItem="Shop"/>
                    <Li listItem="About"/>
                    <Li listItem="Contact"/>
                    <Li listItem="Journal"/>
                </ul>
                <ul className='font-DM text-sm text-[#6D6D6D] flex flex-col gap-y-2'>
                    <div className='pb-4'>
                    <Li className="font-bold text-[16px] leading-[23px] text-[#000000]" listItem="SHOP"/>
                    </div>
                    <Li listItem="Category 1"/>
                    <Li listItem="Category 2"/>
                    <Li listItem="Category 3"/>
                    <Li listItem="Category 4"/>
                    <Li listItem="Category 5"/>
                </ul>
                <ul className='font-DM text-sm text-[#6D6D6D] flex flex-col gap-y-2'>
                    <div className='pb-4'>
                    <Li className="font-bold text-[16px] leading-[23px] text-[#000000]" listItem="HELP"/>
                    </div>
                    <Li listItem="Privacy Policy"/>
                    <Li listItem="Terms & Conditions"/>
                    <Li listItem="Special E-shop"/>
                    <Li listItem="Shipping"/>
                    <Li listItem="Secure Payments"/>
                </ul>
            </div>
            <div className='flex justify-around pt-[54px]'>
                <div className='pl-36 pr-64'>
                    <p className='font-DM font-bold text-[16px] text-[#000000]'>(052) 611-5711</p>
                    <Link className='font-DM font-bold text-[16px] text-[#000000]'>company@domain.com</Link>
                    <p>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div>
                    <Img src={logo}/>
                </div>
            </div>
         </div>
         <div className='flex justify-between items-center py-14'>
                <div className='flex gap-6'>
                   <Link><FaFacebookF /></Link>
                   <Link><FaLinkedinIn /></Link>
                   <Link><FaInstagram /></Link>
                </div>
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>  
        </Container>
    </div>
  )
}

export default Footer