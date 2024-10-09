import React from 'react'
import Container from '../layer/Container'
import Cart from '../layer/Cart'

const BastSelling = () => {
  return (
    <div>
      <Container>
        <h1 className='font-DM font-bold text-[39px] text-[#262626] pt-32'>Bast Selling</h1>
        <div className='flex justify-between pt-12'>
          <Cart/>
          <Cart/>
          <Cart/>
          <Cart/>
        </div>
      </Container>
    </div>
  )
}

export default BastSelling