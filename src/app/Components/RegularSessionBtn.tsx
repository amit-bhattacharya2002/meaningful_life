import Link from 'next/link'
import React from 'react'

type Props = {
    regularLink: string,
}

const RegularSessionBtn = ({regularLink}: Props) => {
  return (
    <Link href={regularLink}>
        <div className=' rounded-lg bg-green-900 p-5 text-stone-100 w-full sm:w-[15rem] h-[4rem] text-center py-auto'>Book a Regular Session</div>
    </Link>
  )
}

export default RegularSessionBtn