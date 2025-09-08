import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import brickslider from './assets/brickslider.png'
import twinliders from './assets/twinliders.png'
import Secondabout from './components/Secondabout'

function App() {
  return (
    <div className='app overflow-x-clip'>
      <Hero/>
      <img src={brickslider} alt="" className='lg:w-[100vw] w-[200vw] max-w-none -mt-20 lg:-mt-50' />

      
      <About/>
      <Secondabout/>
      <img src={twinliders} alt="" className='lg:w-[100vw] w-[200vw] max-w-none -mt-20 lg:-mt-50' />
      
      <Tokenomics/>
    </div>
  )
}

export default App