import React from 'react'
import Container from '../layer/Container'
import Cart from '../layer/Cart'
import Slider from 'react-slick'
import {  FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="w-16 h-16 bg-[#979797] rounded-full items-center justify-center text-white absolute right-5 z-10 top-[153px] hover:cursor-pointer hover:pl-3 hover:text-xl transition-all duration-100"
        style={{ ...style, display: "flex",}}
        onClick={onClick}
      >
        <FaLongArrowAltRight />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="w-16 h-16 bg-[#979797] rounded-full items-center justify-center text-white absolute left-5 z-10 top-[153px] hover:cursor-pointer hover:pr-3 hover:text-xl transition-all duration-100"
        style={{ ...style, display: "flex",}}
        onClick={onClick}
      >
        <FaLongArrowAltLeft />
      </div>
    );
  }
const NewArrivals = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div>
        <Container className="max-w-[1640px]">
        <Slider {...settings}> 
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
          <Cart className="w-full px-5"/>
      </Slider>
        </Container>
    </div>
  )
}

export default NewArrivals