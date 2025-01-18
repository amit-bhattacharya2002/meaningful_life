import Link from 'next/link'
import React from 'react'

type Props = {

    freeLink: string,
}

const FreeSessionBtn = ({freeLink}: Props) => {
  return ( 
    <Link href={freeLink}>
        <div className=' rounded-lg bg-green-900 p-5 text-stone-100 w-full sm:w-[15rem] h-[4rem] text-center py-auto mb-5 sm:mb-0'>Book a Free Session</div>
    </Link>
  )
}

export default FreeSessionBtn