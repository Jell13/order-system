import React from 'react'

const Items = ({name, price, image}) => {
  return (
    <div className='bg-[#EFE5DC] flex items-center justify-between px-4 py-4 rounded-xl'>
      <div className='flex flex-col gap-6'>
        <h4>{name}</h4>
        <img className='md:w-[200px] w-[100px]' src={image} alt="image" />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='bg-[#F5C5AA] px-8 py-1 rounded-xl'>
          ${price}.00
        </p>
        <button className='px-2 py-1 bg-[#F5C5AA] rounded-xl'>Add to cart</button>
      </div>
      
    </div>
  )
}

export default Items
