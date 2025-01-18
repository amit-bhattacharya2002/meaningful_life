import React from 'react'
import Image from 'next/image'
// import { Alexandria, Poppins } from 'next/font/google'
import Link from 'next/link'
// const alexandria = Alexandria({subsets: ['latin']})
// const poppins = Poppins({subsets: ['latin'], weight: ['200','400', '700']})
import {Lexend, Playfair_Display, Montserrat} from 'next/font/google'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

// const lexend = Lexend({subsets: ['latin'], weight: ['400', '700']})
const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})
const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '700']})
type Props = {}

const Herosection = (props: Props) => {
  return (
    <div className='h-screen md:h-[90vh] md:flex-row flex-col flex items-center  md:gap-[10rem] bg-[#e9f0d7] '>
        <Image className=' p-5 md:pl-[5%] h-[70%]'
            src={'/Meaningful Discussions.png'}
            alt={'Hero Image'}
            width={650}
            height={600}
            
        >

        </Image>
        <div className='w-full md:w-[30%] p-10 md:p-0'>
            <h1 className={`text-2xl md:text-5xl text-center md:text-start font-bold ${playfair.className}`}>Find Meaning. Live Fully</h1>
            <p className={`${montserrat.className} italic text-sm text-center md:text-start md:text-xl mt-2 md:mt-10 font-light`}>We are here to help you create a life filled with intention and meaning. Let our expert coaches guide you toward growth and transformation.</p>
            <ul className={`flex gap-10 justify-between text-sm md:text-lg p-2 md:pt-5 mt-10  font-regular`}>
                <Link href={'/about'} className='border-[0.05rem]  border-green-900 rounded p-2 md:p-4 bg-green-900 text-white'>Learn More</Link>
                <Link href={'/booksession'} className='border-[0.05rem] border-green-900 rounded p-2 md:p-4 bg-green-900 text-white'>Book A Session</Link>
            
            </ul>
        </div>
    </div>
  )
}

export default Herosection