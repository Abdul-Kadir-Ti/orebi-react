import React from 'react'
import Banner from '../components/Banner'
import Add1 from '../components/Add1'
import Cart from '../layer/Cart'
import NewArrivals from '../components/NewArrivals'
import BastSelling from '../components/BastSelling'
import Add2 from '../components/Add2'
import SpecialOffers from '../components/SpecialOffers'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Add1/>
      <NewArrivals/>
      <BastSelling/>
      <Add2/>
      <SpecialOffers/>
    </div>
  )
}

export default Home