import React from 'react'
import Image from 'next/image'

import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type



const playfair = Playfair_Display({subsets: ['latin'], weight: ['400', '700']})

type Props = {}
const coaches = [
    {
        name: "Coach 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/elementor-placeholder-image.webp",
        link: "/coaches"
    },
    {
        name: "Coach 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/elementor-placeholder-image.webp",
        link: "/coaches"
    },
    {
        name: "Coach 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nostrum!",
        image: "/elementor-placeholder-image.webp",
        link: "/coaches"
    }
];

const Coach2 = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <Slider {...settings}>
    {coaches.map((coach, index) => (
        <div key={index} className="px-10">
            <div className="flex justify-start">
                <Image
                    src={coach.image}
                    width={500}
                    height={500}
                    alt={coach.name}
                    className="w-[30%]"
                />
                <div className="px-10 flex items-start pt-10 h-full justify-between w-full">
                    <div className="gap-10 flex flex-col w-[50%]">
                        <h1 className={`${playfair.className} text-4xl font-bold`}>{coach.name}</h1>
                        <p>{coach.description}</p>
                        <Link href={coach.link} className="border p-4 rounded text-center w-fit">
                            <p>More Info</p>
                        </Link>
                    </div>
                    <ul className="flex gap-4 flex-col w-fit my-auto">
                        <p>Book a free session</p>
                        <p>Book a regular session</p>
                    </ul>
                </div>
            </div>
        </div>
    ))}
</Slider>
  )
}

export default Coach2