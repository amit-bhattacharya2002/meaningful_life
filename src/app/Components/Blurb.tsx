import React from 'react'
import { FaClipboardList, FaClipboardCheck } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

// import { GiArchiveResearch } from "react-icons/gi";
import {Lexend, Playfair_Display} from 'next/font/google'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type


// const lexend = Lexend({subsets: ['latin'], weight: ['400', '700']})
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})

type Props = {
    props?: any
}

const Blurb = (props: Props) => {
  return (
    <div className='h-full md:h-screen md:pt-0 pt-10 justify-center md:justify-between grid grid-cols-1 md:grid-cols-2 '>
      <div className='text-2xl md:text-5xl p-2 md:pl-[5rem] text-center md:text-start w-full pb-10 md:pb-0 border-b-2 md:border-b-0  m-auto flex flex-col gap-5'>
          
          <h1 className={`font-black ${playfair.className}`}>At Meaningful Life we understand that your time is precious</h1> 
          <span className={` italic ${playfair.className}`}>Let us handle the research so you can focus on what truly matters</span>
      </div>



            
            {/* <h1></h1> */}
            <div className='w-full h-fit my-auto flex flex-col gap-[2rem]'>
                <h1 className={`${playfair.className} w-full px-2 md:px-[10rem] pt-[5rem] pb-2 md:pb-[2rem] font-black text-xl md:text-4xl  text-center`}>
                    How it works
                </h1>
                <div className='flex flex-row mx-2 md:mx-[5rem] h-fit  gap-[2rem]  '>
                
                    <div className=' w-[33%] flex flex-col gap-[1rem] items-center'>
                        <FaClipboardList className='w-[70px] h-[70px] '/>
                        <h1 className={`font-bold`}>Assessment</h1>
                        <p className='text-center text-xs md:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, fugiat.</p>
                    </div>
                    
                    <div className=' w-[33%] flex flex-col gap-[1rem] items-center '>
                        <FaBookOpenReader className='w-[70px] h-[70px] '/>
                        <h1 className={`font-bold`}>Research</h1>
                        <p className='text-center text-xs md:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, fugiat.</p>
                    </div>
                
                    <div className=' w-[33%] flex flex-col gap-[1rem] items-center'>
                        <FaClipboardCheck className='w-[70px] h-[70px]'/>
                        <h1 className='font-bold'>Results</h1>
                        <p className='text-center text-xs md:text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, fugiat.</p>
                    </div>
                
                </div>
            </div>



       
    </div>


  )
}

export default Blurb