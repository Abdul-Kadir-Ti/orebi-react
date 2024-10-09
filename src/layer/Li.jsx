import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, listItem ,to}) => {
  return (
    <li>
    <Link to={to} className={`font-DM font-bold text-sm text-[#767676] transition-all duration-300 hover:text-[#262626] ${className}`}>
        {listItem} 
    </Link>
  </li>
  )
}

export default Li