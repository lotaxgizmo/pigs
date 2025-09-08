import React from 'react'
import x from '../../assets/x.png'
import dex from '../../assets/dex.png'
import dexx from '../../assets/dexx.png'
import tel from '../../assets/tel.png'

function socials() {

    const socialsclass = "w-[17vw] lg:w-[5vw] "

  return (
    <div className='flex flex-row lg:flex-col justify-center items-center lg:mb-10 mb-4 gap-4'>
        <img src={x} alt="" className={socialsclass} />
        <img src={dex} alt="" className={socialsclass} />
        <img src={dexx} alt="" className={socialsclass} />
        <img src={tel} alt="" className={socialsclass} />
    </div>
  )
}

export default socials