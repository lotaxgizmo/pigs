import React from 'react'
import jail from '../assets/jail.webp'
import abouttext from '../assets/abouttext.png'
import aboutext from '../assets/aboutext.png'
import aboutpic from '../assets/aboutpic.webp'

function About() {
  return (
<div id='about' className="about flex flex-col">

<div className='flex flex-row justify-center items-center'>

<div className="left w-[15vw] lg:w-[20vw] flex flex-col">
<img src={aboutext} alt="" className='w-[20vw] lg:w-[13vw]' />
</div>

<div className="right w-[85vw] lg:w-[70vw] flex flex-col">
<div className="texty flex justify-center items-center relative pr-4">

        <img src={abouttext} alt="" className='w-[90vw] lg:w-[70vw] self-start hidden lg:block' />
        <p className='text-[5vw] lg:text-[2vw] text-center lg:leading-10 leading-5 text-whited lg:text-black mb-4 lg:absolute lg:w-[50vw] w-[90vw]  bg-white lg:bg-[#00000000]  p-4 rounded-3xl'>lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
<img src={jail} alt="" />
</div>


</div>


<div className="bottompic w-full flex justify-center items-center">
<img src={aboutpic} alt="" className='w-[90vw] lg:w-[90vw]' />
</div>



</div>
  )
}

export default About