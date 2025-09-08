import React from 'react'
import latest from '../assets/latest.png'
import Arrested from './props/Arrested'

function Page2() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={latest} alt="" className='w-[90vw] lg:w-[90vw] mt-5' />
        <Arrested/>
    </div>
  )
}

export default Page2