import React from 'react'
import footerx from '../assets/footerx.png'
import reserved from '../assets/reserved.png'
import community from '../assets/community.png'
import footertelegram from '../assets/footertelegram.png'

function Footer() {
    const footericonclass = "w-[20vw] lg:w-[15vw] hover:scale-110 active:scale-90 transition-all duration-300"
  return (
    <div id='contact' className=' flex flex-col justify-center items-center'>
        <img src={community} alt="" className='w-[90vw] lg:w-[80vw]'/>

        <div className="lowdiv flex flex-row justify-center items-center gap-5 lg:gap-20">
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <img src={footertelegram} alt="Telegram" className={footericonclass}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={footerx} alt="X (Twitter)" className={footericonclass}/>
            </a>
        </div>
        <p className='text-white text-[6.5vw] lg:text-[5vw] lg:leading-10 leading-5  m-5 mt-10'> 2025 porke. All rights reserved</p>
        {/* <img src={reserved} alt="" className='w-[90vw] lg:w-[70vw] m-5'/> */}
    </div>
  )
}

export default Footer