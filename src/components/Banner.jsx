import React, { useState } from 'react'
import Container from '../layer/Container'
import bannerA from '/banner/banner01.png'
import bannerB from '/banner/banner02.jpg'
import bannerC from '/banner/banner03.jpg'
import bannerD from '/banner/banner04.jpg'
import Img from '../layer/Img'
import Slider from 'react-slick'
import { TbTruckDelivery } from 'react-icons/tb'
import { IoReloadOutline } from 'react-icons/io5'

const Banner = () => {

  let [active, setActive] = useState(0)

  var settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    beforeChange: (item, index)=>{
      setActive(index)
    },
    appendDots: dots => (
      <div
        style={{
          borderRadius: "0px",
          padding: "0px",
          position: "absolute",
          left:"150px",
          top:"50%",
          transform:"translateY(-50%)",

        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`text-[10px] flex items-center border-r-2 ${ i==active? "border-[#262626] text-[#262626]" : "text-transparent border-[#cccbcb]" }`}
        style={{
          width: "15px",
          height:'20px',
        }}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          appendDots: dots => (
            <div
              style={{
                borderRadius: "0px",
                padding: "0px",
                position: "absolute",
                right:"50%",
                bottom:"20px",
                transform:"translateX(50%)",
      
              }}
            >
              <ul className='flex ' style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`text-[10px] flex justify-center items-center border-b-2 ${ i==active? "border-[#262626] text-[#262626]" : "text-transparent border-white" }`}
              style={{
                width: "22px",
                height:'30px',
              }}
            >
              0{i + 1}
            </div>
          ),
        }
      },
    ]
  };
  return (
    <div>
      <Container className="max-w-[1920px]">
        <div>
          <Slider {...settings}>
            <div>
            <Img className='w-full' src={bannerA} />
            </div>
            <div>
            <Img className='w-full' src={bannerB} />
            </div>
            <div>
            <Img className='w-full' src={bannerC} />
            </div>
            <div>
            <Img className='w-full' src={bannerD} />
            </div>
          </Slider>
        </div>
      </Container>
      <div>
        <Container className="flex justify-between px-3 md:px-0">
          <div className='flex items-center text-center'>
            <p className='font-DM text-[8px] md:text-[16px] text-[#6D6D6D]'><span className='text-[#262626] text-sm md:text-2xl font-bold mr-2'>2</span>Two years warranty</p>
          </div>
          <div className='flex items-center gap-2'>
          <TbTruckDelivery />
          <p className='font-DM text-[8px] md:text-[16px] text-[#6D6D6D]'>Free shipping</p>
          </div>
          <div className='flex items-center gap-2'>
          <IoReloadOutline />
          <p className='font-DM text-[8px] md:text-[16px] text-[#6D6D6D]'>Return policy in 30 days</p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Banner