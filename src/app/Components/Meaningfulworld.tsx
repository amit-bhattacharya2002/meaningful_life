import React from 'react'
import { Playfair_Display } from 'next/font/google'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type


const pl = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})

type Props = {}

const Meaningfulworld = (props: Props) => {
  return (
    <div className='h-screen pt-10 md:pt-[10rem] p-2 md:p-0 md:m-10 flex flex-col md:flex-row'>
        <h1 className={`${pl.className} text-xl md:text-4xl text-center md:text-start font-bold w-full md:w-[30%] pb-0 md:pb-5 m-2 md:m-auto border-r-0 md:border-r-2 h-full flex items-center border-green-900`}>Join Our <br className='md:block hidden'></br> Meaningful World</h1>

        <div className='grid grid-cols-2 grid-rows-2 h-full text-start items-center text-lg md:text-3xl p-0 md:p-10'>
            <h1 >Friendship Bootcamp</h1>
            <h1>Meaningful Discussions</h1>
            <h1>BuddyTree</h1>
            <h1>Meaningful Life</h1>
        </div>
    </div>
  )
}

export default Meaningfulworld