import React from 'react'
import { Alexandria } from 'next/font/google'
import Link from 'next/link'
const alexandria = Alexandria({subsets: ['latin'], weight: ['400', '700']})
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='h-[10vh] hidden sticky top-0 z-[100000] bg-white text-black  md:flex w-full justify-between p-5 items-center border-b-[0.5px]'>
        <Link href={'/'}><h1 className={`${alexandria.className} text-xl `}>MEANINGFUL LIFE</h1></Link>
        
        <ul className={`flex gap-10 font-light ${alexandria.className}`}>
            <Link href={'/about'}>
                <li>About Us</li>
            </Link>
            <Link href={'/coaches'}>
                <li>Our Coaches</li>
            </Link>
            <Link href={'/faq'}>
                <li>FAQ</li>
            </Link>
            <Link href={'/contact'}>
                <li>Contact Us</li>
            </Link>


        </ul>


    </div>
  )
}

export default Header