import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-8 justify-center items-center md:px-44 px-12'>
      <h1 className='text-5xl'>
        Thank you for your order!, Please go to the counter!
      </h1>
      <Link className='text-3xl bg-[#EFE5DC] px-4 py-2 rounded-xl' href={"/"}>
        Order again ?
      </Link>
    </div>
  )
}

export default page
