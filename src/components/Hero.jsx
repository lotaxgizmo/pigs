import React from 'react'
import imageguy from '../assets/imageguy.webp'
import herotext from '../assets/herotext.png'
import subtext from '../assets/subtext.png'
import buybtn from '../assets/buybtn.png'
import policelight from '../assets/policelight.webp'
import Socials from './props/Socials'


function Hero() {
  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-start '>

        <div className="left lg:w-[50%] w-full flex justify-center items-center self-center z-5 relative">
        <img src={imageguy} alt="" className='w-[60vw] lg:w-[40vw] z-2' />
        <img src={policelight} alt="" className='w-[90vw] lg:w-[80vw] absolute top-0s ' />
        </div>



        <div className="right lg:w-[40%] w-full flex flex-col justify-center items-start m-4">
        <img src={herotext} alt="" className='w-[90vw] lg:w-[45vw] lg:mt-[5vw]' />
        <img src={subtext} alt="" className='w-[90vw] lg:w-[40vw] lg:mb-10 mb-4' />

       <div className="socials flex lg:hidden">
        <Socials/>
       </div>

        <img src={buybtn} alt="" className='w-[70vw] lg:w-[25vw]' />
        </div>

        <div className="right lg:w-[10%] hidden lg:flex flex-col justify-center items-start mt-[7vw] "> 
            <Socials/> 
        </div>
        
    </div>
  )
}

export default Hero