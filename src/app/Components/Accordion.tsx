'use client'
import React, { useState } from 'react'
// import { Playfair_Display } from 'next/font/google'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// const pl = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})  

type Props = {

    question: string,
    description: string,

}

const Accordion = ({question, description}: Props) => {

    const [isActive, setIsActive] = useState(false);
  return (
    <div className={`w-full mb-5`}>
        <div>

        </div>
        <div onClick={() => setIsActive(!isActive)} className='cursor-pointer bg-green-900  p-5  text-stone-100 text-sm sm:text-xl items-center  w-full flex flex-row justify-between'> 
            <h1 className='font-bold'>{question}</h1> 
            <p>{isActive ? <IoIosArrowUp />: <IoIosArrowDown />}</p>
        </div>

        {isActive && <p className='bg-stone-100 min-h-[10rem] p-5 text-xs sm:text-lg'>{description}</p>}

    </div>
  )
}

export default Accordion