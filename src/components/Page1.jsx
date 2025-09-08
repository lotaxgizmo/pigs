import React from 'react'
import Hero from './Hero'
import About from './About'
import Tokenomics from './Tokenomics'
import brickslider from '../assets/brickslider.webp'
import twinliders from '../assets/twinliders.png'
import Secondabout from './Secondabout'
import Footer from './Footer'
import Page2 from './Page2'

function Page1() {
  return (
    <div>
        <Hero/>

      <img src={brickslider} alt="" className='lg:w-[100vw] w-[200vw] max-w-none -mt-20 lg:-mt-50' />

      <About/>
      <Secondabout/>

      <img src={twinliders} alt="" className='lg:w-[100vw] w-[200vw] max-w-none -mt-20 lg:-mt-50' />

      <Tokenomics/>
      <Page2/>
      <Footer/>
    </div>
  )
}

export default Page1