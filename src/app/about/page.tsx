import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700'], style: ['italic', 'normal']})
type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
        {/* <h1 className='text-xl text-center'>Our Purpose</h1> */}

        <div>
        <div className='h-full  '>
            <div className="h-[30vh] sm:h-[60vh] bg-green-900 flex flex-col p-2 sm:p-10 items-center 
         justify-between">
                <h1 className='h-fit text-lg sm:text-2xl text-center sm:text-start w-full text-stone-100 '>We help you achieve</h1>
                <h1 className={` text-black w-full h-fit text-center sm:text-start ${playfair.className} text-stone-100 font-bold text-[1.5rem] sm:text-[5rem] italic`}>Fulfillment . Purpose . Connection</h1>
                <h1 className='h-fit text-lg sm:text-2xl text-center w-full text-stone-100'>Find out what motivates us</h1>
                {/* <Image className='h-[70%]'
                    src={'/Meaningful Discussions.png'}
                    alt={'Hero Image'}
                    width={600}
                    height={600}
                ></Image> */}
            </div>


            <div className='px-5 sm:px-10 h-full py-[10rem]  w-full justify-center flex flex-col sm:flex-row gap-6 items-center'>
                
                <iframe width="800" height="450" src="https://www.youtube.com/embed/xiIB7FQLWaE?si=R9XXO8xTPxs2sPXr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " className='w-[90vw] h-[225px] sm:w-[800px] sm:h-[450px]' ></iframe>
                <div className='flex flex-col gap-10 justify-center w-full sm:w-[30%]'>
                <Image
                    src={'/elementor-placeholder-image.webp'}
                    alt={'Hero Image'}
                    width={500}
                    height={500}
                >
                </Image>
                    <div className="flex-col gap-5 h-full w-full flex text-center">
                        <p className={` font-bold text-center text-4xl ${playfair.className}`}>
                            Glen Brauer
                        </p>
                        <p>Founder</p>
                        <p className={` font-regular `}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <div className='h-screen flex flex-col sm:flex-row gap-10 p-10 bg-stone-100'>
                <h1 className={`text-3xl sm:text-5xl ${playfair.className} font-bold italic text-center h-fit w-fit m-auto`}>Our Mission</h1>
                <p className='text-lg sm:text-2xl text-center h-fit m-auto w-full sm:w-[60%]'>At Meaningful Life Coaching, we believe that everyone deserves a life filled with purpose, fulfillment, and joy. Our mission is twofold: to help individuals find deeper meaning in their lives and to provide meaningful work opportunities for talented coaches at a fair wage. We understand that life can feel overwhelming, directionless, or even stuck at times. That’s where we come in. Through personalized coaching sessions, we guide our clients toward clarity, intentionality, and a life that truly aligns with their values.</p>
            </div>
                <div className='h-screen flex flex-col sm:flex-row  p-10 gap-10 sm:gap-10'>
                    <h1 className={`text-3xl sm:text-5xl ${playfair.className} font-bold italic text-center h-fit w-fit mx-auto sm:m-auto`}>Our Coaches</h1>
                    <p className='w-full sm:w-[60%] text-lg sm:text-2xl h-fit sm:m-auto mx-auto  text-center'>We’ve carefully selected a small group of skilled and compassionate coaches who are experts in personal development, mindfulness, and goal-setting. Each coach brings their own unique approach, ensuring that every client finds the right fit for their journey.</p>
                </div>
            <div className='h-screen flex flex-col sm:flex-row p-10 gap-10 bg-stone-100'>
                <h1 className={`text-3xl sm:text-5xl ${playfair.className} font-bold italic text-center h-fit w-fit mx-auto sm:m-auto`}>Why Choose Us?</h1>
                <p className='w-full text-center sm:text-start sm:w-[60%] text-lg sm:text-2xl h-fit mx-auto sm:m-auto flex flex-col gap-10'>
                    <span><span className="font-bold">Personalized Guidance:</span> Our coaches provide tailored support to meet your individual needs.</span>

                    <span><span className="font-bold">Expert Coaches:</span> Experienced professionals who genuinely care about your growth.</span>

                    <span><span className="font-bold">Premium Experience:</span> A high-end, transformative coaching service designed to deliver results.</span>
                    {/* How It Works
                    Start with a free introductory session to explore if our coaching is the right fit for you.
                    Select from our curated team of coaches, each offering a unique perspective and style.
                    Begin your journey toward a more meaningful and fulfilling life.
                    Your transformation begins here. Let’s make it meaningful—together. */}
                </p>
            </div>
            {/* <Link href={'/coaches'} className=''>Meet Our Coaches</Link> */}
            </div>
        </div>


  )
}

export default page