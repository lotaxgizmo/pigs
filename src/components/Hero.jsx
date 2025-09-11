import React, { useState } from 'react'
import imageguy from '../assets/imageguy.webp'
import herotext from '../assets/herotext.png'
import subtext from '../assets/subtext.png'
import buybtn from '../assets/buybtn.png'
import policelight from '../assets/policelight.webp'
import Socials from './props/Socials'


function Hero() {

  const contractaddress = "?????????????????????????????????????????";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractaddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide notification after 2 seconds
      console.log('Contract address copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className='flex lg:flex-row flex-col-reverse justify-center items-start '>

      <div className="left lg:w-[50%] w-full flex justify-center items-center self-center z-5 relative">
        <img src={imageguy} alt="" className='w-[60vw] lg:w-[40vw] z-2' />
        <img src={policelight} alt="" className='w-[90vw] lg:w-[80vw] absolute top-0s ' />
      </div>

      <div className="right lg:w-[40%] w-full flex flex-col justify-center items-start m-4 text-white lg:mr-10">
        <h1 className='chocolade lg:text-[8vw] text-[18vw] lg:leading-[6vw] leading-15 '>$POLICE <br />THE <br />CRYPTO COP</h1>
        {/* <img src={herotext} alt="" className='w-[90vw] lg:w-[45vw] lg:mt-[5vw]' /> */}
        <p className='text-[6vw] lg:text-[2.5vw] lg:leading-10 leading-5 mb-4'>Laugh, Invest, and Patrol the Crypto Streets with POLICE!</p>
        {/* <img src={subtext} alt="" className='w-[90vw] lg:w-[40vw] lg:mb-10 mb-4' /> */}

        <div className="socials flex lg:hidden">
          <Socials />
        </div>

        <div className="div relative flex justify-center items-center  mb-4 s cursor-pointer" onClick={copyToClipboard}>
          <div className="z-10 ca flex justify-center items-center bg-black p-3 rounded-[30px] my-3 ">
            <p className="text-white text-[3.7vw] lg:text-[1.5vw]   w-s w-minz whitespace-normal break-words">CA: {contractaddress}</p>
          </div>
          
          {/* Copy notification */}
          {copied && (
            <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium z-20 animate-pulse">
              Copied to clipboard!
            </div>
          )}

        </div>

        <a href="https://dex.com" target="_blank" rel="noopener noreferrer">
          <img src={buybtn} alt="Buy Now" className='w-[70vw] lg:w-[25vw] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer' />
        </a>
      </div>

      <div className="right lg:w-[10%] hidden lg:flex flex-col justify-center items-start mt-[7vw] ">
        <Socials />
      </div>

    </div>
  )
}

export default Hero
