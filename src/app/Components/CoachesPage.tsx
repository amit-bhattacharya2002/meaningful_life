import Image from 'next/image'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
// import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Coach2 from './Coach2';
import FreeSessionBtn from './FreeSessionBtn';
import RegularSessionBtn from './RegularSessionBtn';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type


const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})

type Props = {}

const coaches = [
    {
        name: "Coach 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/phimage.webp",
        link: "/coach/1",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    },
    {
        name: "Coach 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/phimage.webp",
        link: "/coach/2",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    },
    {
        name: "Coach 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/phimage.webp",
        link: "/coach/3",
        regularmeetinglink: '/coaches',
        freemeetinglink: '/coaches',
    }
];

const CoachesPage = (props: Props) => {
    
  return (
    <div className='h-full pt-[5rem] w-full md:w-[95%] m-auto'>
        
        <h1 className={`sm:text-start m-10 mb-[5rem] pb-5  text-2xl text-center sm:text-5xl border-green-900  border-b-2 ${playfair.className} font-black `}>Meet Our Coaches</h1>

        <div className='flex flex-col md:flex-row md:items-start items-center w-full'>
            <div className=' flex flex-col gap-[5rem]  m-auto p-4 md:p-0 md:pr-[5rem]'>
                {/* Coach 1 */}
            
                {coaches.map((coach, index) => (
            <div key={index} className="p-2 md:px-10 border-r-0 md:border-r-2 border-green-900">
                <div className="flex flex-col md:flex-row justify-center">
                    <Image
                        src={coach.image}
                        width={500}
                        height={500}
                        alt={coach.name}
                        className="w-full md:w-[30%]"
                    />
                    <div className="px-10 flex flex-col sm:flex-row items-center text-center sm:text-start sm:items-start pt-10 h-full justify-between w-full">
                        <div className="gap-10 flex flex-col w-full sm:w-[50%]">
                            <h1 className={`${playfair.className} text-2xl sm:text-4xl font-bold`}>{coach.name}</h1>
                            <p>{coach.description}</p>
                            <Link href={coach.link} className="border p-4 sm:my-0 my-10 sm:mx-0 w-fit mx-auto border-green-900 rounded text-center ">
                                <p>More Info</p>
                            </Link>
                        </div>
                        <ul className="flex gap-4 flex-col w-fit my-auto">
                            <FreeSessionBtn freeLink={coach.freemeetinglink}/>
                            <RegularSessionBtn regularLink={coach.regularmeetinglink}/>
                        </ul>
                    </div>
                </div>
            </div>
                ))}
            </div>
            <div className='md:sticky md:top-[40%] w-full mt-20 sm:mt-0 md:w-[40%]  '>
                <h1 className={`${playfair.className} text-xl text-center md:text-start md:text-4xl w-fit h-fit  m-auto italic`}>Schedule a meeting with our qualified coaches to get started</h1>
            </div>
        </div>
        
    </div>
  )
}

export default CoachesPage