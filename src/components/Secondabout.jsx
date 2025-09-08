import React from 'react'
import abouttext from '../assets/abouttext.png'
import chasepolice from '../assets/chasepolice.webp'

function Secondabout() {
  return (
    <div className='flex flex-col justify-center items-center  -mt-[5vw] lg:-mt-[10vw]'>

      <div className="texty flex justify-center items-center relative">

        <img src={abouttext} alt="" className='w-[90vw] lg:w-[70vw] self-start hidden lg:block' />
        <p className='text-[5vw] lg:text-[2vw] text-center lg:leading-10 leading-5 text-whited lg:text-black mb-4 lg:absolute lg:w-[50vw] w-[90vw]  bg-white lg:bg-[#00000000]  p-4 rounded-3xl'>lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
        <img src={chasepolice} alt="" className='w-[100vw] lg:w-[75vw] self-end -mt-[15vw] lg:-mt-[20vw] z-3' />
    </div>
  )
}

export default Secondabout