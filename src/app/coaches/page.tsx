import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})
type Props = {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type


const coaches = [
  {
      name: "Coach 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
      image: "/phimage.webp",
      link: "/coach/1"
  },
  {
      name: "Coach 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
      image: "/phimage.webp",
      link: "/coach/2"
  },
  {
      name: "Coach 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
      image: "/phimage.webp",
      link: "/coach/3"
  }
];

const pages = (props: Props) => {
  return (
    <div className='w-full'>
      
        <div className='h-[30vh] sm:h-[60vh] flex flex-col justify-center bg-green-900 text-stone-100 '>
          <h1 className={`text-center p-10 text-4xl sm:text-7xl ${playfair.className} font-bold italic h-fit m-auto w-fit`}>Our Coaches</h1>
        </div>
{/* 
        <div className='flex items-start '>
          <div className='sticky top-[40%] w-[20%]  '>
                  <h1 className={`${playfair.className} text-3xl w-[50%] h-fit ml-10 `}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni in nisi iste nostrum doloribus vel, enim exercitationem quasi porro placeat?
                  </h1>
              </div> */}
          <div className='flex flex-col items-center w-full pb-10 sm:pb-5 p-0 sm:p-10'>
              <h1 className={`text-2xl sm:text-4xl text-center sm:text-start p-5 sm:p-10 pt-10 sm:pt-20 border-b-2`}>Our highly qualified coaches are here to help you</h1>
              <div className=' flex flex-col sm:gap-0 gap-10 sm:flex-row mt-20 w-full '>
                  {/* Coach 1 */}
          
                  {coaches.map((coach, index) => (
              <div key={index} className=" border-r-0">
                  <div className="flex flex-col justify-start">
                      <Image
                          src={coach.image}
                          width={500}
                          height={500}
                          alt={coach.name}
                          className="w-[70%] mx-auto"
                      />
                      <div className="px-10 flex flex-col items-center text-center w-full pt-10 h-full justify-between ">
                          <div className="gap-10 flex flex-col w-[50%]">
                              <h1 className={`${playfair.className} text-4xl font-bold`}>{coach.name}</h1>
                              <p>{coach.description}</p>
                              <Link href={coach.link} className="border p-4 rounded text-center w-fit m-auto">
                                  <p>More Info</p>
                              </Link>
                          </div>
                          {/* <ul className="flex gap-4 flex-col w-fit my-auto">
                              <p>Book a free session</p>
                              <p>Book a regular session</p>
                          </ul> */}
                      </div>
                  </div>
              </div>
                  ))}
              </div>
          
          </div>
        </div>
    // </div>
  )
}

export default pages