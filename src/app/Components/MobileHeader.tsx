'use client'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import { div } from 'framer-motion/client';
import Link from 'next/link';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

type Props = {}

const MobileHeader = (props: Props) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => {setIsActive(!isActive)}} className='fixed top-0 md:hidden bg-green-900'>
        <div className="bg-green-900 text-white w-full">{!isActive ? <GiHamburgerMenu className='h-[40px] w-auto p-2'/> : <AiOutlineClose className='h-[40px] w-auto p-2'/>}</div>
        {isActive && <div className='h-screen w-screen grid grid-rows-2 bg-green-900 text-white '>

        <Link href={'/'}><div className='flex justify-center items-center h-[30%] text-5xl text-center mt-20 p-10'>Meaningful Life</div></Link>
            <div className='flex h-[50%] flex-col justify-between text-2xl'>
              <Link href={'/about'}>
                <div className='flex justify-center items-center'>About Us</div>
              </Link>
              <Link href={'/coaches'}><div className='flex justify-center items-center'>Our Coaches</div></Link>
              <Link href={'/faq'}><div className='flex justify-center items-center'>FAQ</div></Link>
              <Link href={'/contact'}><div className='flex justify-center items-center'>Contact</div></Link>

            </div>
           
        </div>}
    </div>
  )
}

export default MobileHeader