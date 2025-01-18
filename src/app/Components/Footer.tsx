import Link from 'next/link'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-[70vh] bg-green-900 grid  grid-rows-2 sm:grid-rows-1 sm:grid-cols-1'>
          <div className='h-full sm:hidden flex justify-center'>
            <h1 className='w-fit p-2 sm:p-10 m-auto text-xl h-fit sm:text-5xl block sm:hidden text-white'>Meaningful Life</h1>
          </div>
          <div className='h-full w-full sm:h-[70vh] bg-green-900 grid  grid-cols-3 sm:grid-cols-4'>
          <h1 className='w-fit p-2 sm:p-10 m-auto text-xl hidden sm:block sm:text-5xl text-white'>Meaningful Life</h1>
          <div className='h-full w-full'>
            <ul className='m-auto w-fit h-full flex justify-start sm:justify-center flex-col gap-5 text-sm sm:text-2xl'>
              <Link href={'/about'}>
                <li className='text-white'>About us</li>
              </Link>
              <Link href={'/coaches'}>
                <li className='text-white'>Coaches</li>
              </Link>
              <Link href={'/faq'}>
                <li className='text-white'>FAQ</li>
              </Link>
              <Link href={'/contact'}>
                <li className='text-white'>Contact us</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className='m-auto w-fit h-full flex justify-start sm:justify-center flex-col gap-5 text-sm sm:text-2xl'>
              <Link href={'/about'}>
                <li className='text-white'>Privacy Policy</li>
              </Link>
              <Link href={'/about'}>
                <li className='text-white'>Terms of Service</li>
              </Link>
              <Link href={'/about'}>
                <li className='text-white'>FAQ</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className='m-auto w-fit h-full flex justify-start sm:justify-center flex-col gap-5 text-sm sm:text-2xl'>
              <Link href={'/about'}>
                <li className='text-white'>Facebook</li>
              </Link>
              <Link href={'/about'}>
                <li className='text-white'>Instagram</li>
              </Link>
              <Link href={'/about'}>
                <li className='text-white'>Twitter</li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer