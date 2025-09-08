import React from 'react'
import x from '../../assets/x.png'
import dex from '../../assets/dex.png'
import dexx from '../../assets/dexx.png'
import tel from '../../assets/tel.png'

function socials() {
    const socialsclass = "w-[17vw] lg:w-[5vw] hover:scale-110 active:scale-90 transition-all duration-300"

    // Array of social media links
    const socialLinks = [
        { name: "X (Twitter)", image: x, url: "https://twitter.com" },
        { name: "Dextools", image: dex, url: "https://dextools.io" },
        { name: "DexScreener", image: dexx, url: "https://dexscreener.com" },
        { name: "Telegram", image: tel, url: "https://telegram.org" }
    ];

    return (
        <div className='flex flex-row lg:flex-col justify-center items-center lg:mb-10 mb-4 gap-4'>
            {socialLinks.map((social, index) => (
                <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                >
                    <img 
                        src={social.image} 
                        alt={social.name} 
                        className={socialsclass} 
                    />
                </a>
            ))}
        </div>
    )
}

export default socials