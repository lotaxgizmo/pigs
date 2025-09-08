import React from 'react'
import jail from '../assets/jail.png'
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
<img src={abouttext} alt="" />
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