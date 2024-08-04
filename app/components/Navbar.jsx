import Link from 'next/link';
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='w-full h-full md:px-44 px-12'>
      <div className='flex items-center justify-between h-full'>
        <h1 className='text-4xl font-bold'>IFGF OC Cafe</h1>
        {/* <Link href={'/cart'}>
          <MdOutlineShoppingCart size={40}/>
        </Link> */}
      </div>
    </div>
  )
}

export default Navbar
