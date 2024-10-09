import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

const RootLayOut = () => {
  return (
    <div>
        <Navber/>
        <SearchBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut