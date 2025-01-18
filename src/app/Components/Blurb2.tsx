import { Playfair_Display } from 'next/font/google'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type


const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})
type Props = {
  props?: any
}

const Blurb2 = (props: Props) => {
  return (
    <div className=' h-screen bg-stone-100 mt-20 px-10 flex w-full flex-col md:flex-row'>
        <div className='text-lg md:text-5xl w-full md:w-[60%] h-fit my-[10rem] md:mt-0 md:h-full gap-10 justify-center flex items-center md:items-start flex-col'>
            <h1 className={`${playfair.className} font-bold italic`}>Live a life full of</h1>
            <div className='flex flex-row gap-2  md:gap-10'>
                <h1>Fulfillment</h1>
                <h1>Purpose</h1>
                <h1>Connection</h1>
            </div>
        </div>


        <div className='p-2 md:p-0 md:pl-[10rem] w-full md:w-[40%] h-fit mt-0 md:my-auto'>
            <h1 className='text-xl text-center md:text-start md:text-4xl'>Our coaches are trained to provide Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, perspiciatis?</h1>
        </div>
    </div>
  )
}


//fulfillment purpose connection

export default Blurb2