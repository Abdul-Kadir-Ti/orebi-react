import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

const RootLayOut = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default RootLayOut