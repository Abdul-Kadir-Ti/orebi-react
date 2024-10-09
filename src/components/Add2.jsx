import React from 'react'
import Container from '../layer/Container'
import Img from '../layer/Img'
import add2 from '../../public/add2/add2.jpg'

const Add2 = () => {
  return (
    <div>
        <Container>
            <div className='py-32'>
                <Img src={add2}/>
            </div>
        </Container>
    </div>
  )
}

export default Add2