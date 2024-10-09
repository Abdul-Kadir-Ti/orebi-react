import React from 'react'
import { Link } from 'react-router-dom'

const Img = ({src}) => {
  return (
    <div>
        <Link className='inline-block'>
        <img className='block' src={src} />
        </Link>
    </div>
  )
}

export default Img