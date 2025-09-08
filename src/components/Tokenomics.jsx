import React from 'react'
import liquidity from '../assets/liquidity.png'
import marketcap from '../assets/marketcap.png'
import tax from '../assets/tax.png'
import piggyboxers from '../assets/piggyboxers.png'
import tokenomicstext from '../assets/tokenomicstext.png'
import tokedeets from '../assets/tokedeets.png'

function Tokenomics() {
  return (
    <div id='tokenomics' className='flex flex-col justify-center items-center pb-10 pt-10'>
        <img src={tokenomicstext} alt="" className='w-[100vw] lg:w-[100vw]' />
      
      <div className="dva flex flex-col lg:flex-row justify-center items-center">
      <img src={piggyboxers} alt="" className='w-[100vw] lg:w-[55vw] -mt-[15vw] lg:-mt-[15vw] self-start' />
      <img src={tokedeets} alt="" className='w-[90vw] lg:w-[40vw]  ' />
      </div>
    </div>
  )
}

export default Tokenomics