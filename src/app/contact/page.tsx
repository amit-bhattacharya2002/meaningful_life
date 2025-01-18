import React from 'react'
import { Playfair_Display } from 'next/font/google'
// import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type


const pl = Playfair_Display({subsets: ['latin'], weight: ['500','500', '700'], style: ['italic', 'normal']})  


type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-full'>
        <div className='h-[30vh] sm:h-[60vh] flex flex-col justify-center bg-green-900 text-stone-100 '>
          <h1 className={`text-center p-10 text-4xl sm:text-7xl ${pl.className} font-bold italic h-fit m-auto w-fit`}>Contact Us</h1>
        </div>

        <div className='w-[70%] m-auto flex flex-col sm:flex-row h-full py-5 sm:py-[10rem] justify-between'>
            <h1 className={`w-full sm:w-[30%] border-b-2 sm:border-b-0 border-green-900 py-10 sm:py-0 text-2xl sm:text-4xl ${pl.className} italic  h-fit text-center my-auto items-center`}>
                Reach Out To Us At
            </h1>

            <div className='w-full sm:w-[60%] h-full border-l-0 sm:border-l-2 sm:py-0 py-10 sm:pl-10 m-auto border-green-900 flex flex-col text-md sm:text-2xl justify-between sm:justify-center gap-5 items-center'>
                <div className='flex flex-row justify-between w-full'><h1>Email</h1> <p>email@email.com</p></div>
                <div className='flex flex-row justify-between w-full'><h1>Phone</h1> <p>+1 (604) 432-8965</p></div>
                <div className='flex flex-row justify-between w-full'><h1>Facebook</h1> <p>Meaningful Life</p></div>
            </div>
        </div>
    </div>
  )
}

export default page