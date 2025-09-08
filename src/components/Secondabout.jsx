import React from 'react'
import secondabouttext from '../assets/secondabouttext.png'
import chasepolice from '../assets/chasepolice.webp'

function Secondabout() {
  return (
    <div className='flex flex-col justify-center items-center  -mt-[5vw] lg:-mt-[10vw]'>
        <img src={secondabouttext} alt="" className='w-[90vw] lg:w-[70vw] self-start' />
        <img src={chasepolice} alt="" className='w-[100vw] lg:w-[75vw] self-end -mt-[15vw] lg:-mt-[20vw]' />
    </div>
  )
}

export default Secondabout