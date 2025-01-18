import React from 'react'
import Accordion from '../Components/Accordion'

import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'

const pl = Playfair_Display({subsets: ['latin'], weight: ['500','500', '700'], style: ['italic', 'normal']})  
// eslint-disable-next-line @typescript-eslint/no-empty-object-type


type Props = {}

const faqQuestions = [
    {
        question: 'What is the meaning of life?',
        description: 'The meaning of life is to give life meaning.'
    },
    {
        question: 'What is the meaning of life?',
        description: 'The meaning of life is to give life meaning.'
    },
    {
        question: 'What is the meaning of life?',
        description: 'The meaning of life is to give life meaning.'
    },
    {
        question: 'What is the meaning of life?',
        description: 'The meaning of life is to give life meaning.'
    }
]

const page = (props: Props) => {
  return (
    <div>
        <div className='h-[30vh] sm:h-[60vh] flex flex-col justify-center bg-green-900 text-stone-100 '>
          <h1 className={`text-center p-10 text-4xl sm:text-7xl ${pl.className} font-bold italic h-fit m-auto w-fit`}>Frequently Asked Questions</h1>
        </div>
        <div className='h-full w-[70%] m-auto py-10'>
            {faqQuestions.map((question, index) => {
                return <Accordion key={index} question={question.question} description={question.description}/>
            })}
        </div>

        <div className='w-[70%] m-auto flex flex-col sm:flex-row items-center justify-between border-t-2 pt-5 sm:pt-0'>
            <h1 className={`text-lg sm:text-2xl text-center sm:text-start w-full sm:w-[40%] h-full `}>Don't see you question listed? Please reach out to us!</h1>
            <Link href={'/contact'} >
                <h1 className='text-md sm:text-xl p-5 bg-green-900 text-white my-10 font-bold'>See contact details</h1>
            </Link>
        </div>
    </div>
  )
}


// ${pl.className}

export default page