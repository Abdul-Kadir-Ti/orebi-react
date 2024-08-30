import React from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'
import add1 from '/Add/Add1.jpg'
import add2 from '/Add/Add2.jpg'
import add3 from '/Add/Add3.png'

const Addpart = () => {
  return (
    <div>
        <Container className="pt-[233px] pb-32">
            <div className='h-[780px] grid grid-cols-2 grid-rows-2 gap-4'>
                <div className='row-span-2'><Img src={add1}/></div>
                <div><Img src={add2}/></div>
                <div><Img src={add3}/></div>
            </div>
        </Container>
    </div>
  )
}

export default Addpart