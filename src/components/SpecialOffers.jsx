import React from 'react'
import Container from '../layer/Container'
import Cart from '../layer/Cart'

const SpecialOffers = () => {
  return (
    <div>
        <Container>
            <h1 className='font-DM font-bold text-[39px] text-[#262626]'>Special offers</h1>
            <div className='flex justify-between pt-12'>
                <Cart />    
                <Cart />    
                <Cart />    
                <Cart />    
            </div>
        </Container>
    </div>
  )
}

export default SpecialOffers