import React from 'react'
import johndoe from '../../assets/johndoe.webp'
import anonymous from '../../assets/anonymous.webp'
import arrestedlabel from '../../assets/arrestedlabel.png'

function Arrested() {
  // Array of arrested individuals - easily add/remove/modify
  const arrestedPeople = [
    { name: "John Doe", image: johndoe },
    { name: "?????", image: anonymous },
    { name: "?????", image: anonymous },
    { name: "?????", image: anonymous },
    { name: "?????", image: anonymous },
    { name: "?????", image: anonymous },
  ];

  return (
    <div className='flex flex-row w-full justify-around items-center flex-wrap text-white gap-5 mt-5'>
      {arrestedPeople.map((person, index) => (
        <div key={index} className="div flex flex-col justify-center items-center ">
           <div className="image relative flex justify-center items-center">
           <img src={arrestedlabel} alt="" className='w-[30vw] lg:w-[30vw] max-w-none absolute' />
           <img src={person.image} alt={person.name} className='w-[25vw] lg:w-[25vw]' />
           </div>
          <h2 className='text-[7vw] lg:text-[4vw]'>{person.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Arrested