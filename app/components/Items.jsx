"use client"

import React, { useEffect, useState } from 'react'

const Items = ({id, name, price, image, addItem}) => {

  return (
    <div className='bg-[#EFE5DC] flex items-center justify-between px-4 py-4 rounded-xl'>
      <div className='flex flex-col gap-6'>
        <h4 className='text-2xl'>{name}</h4>
        <img className='md:w-[200px] w-[100px]' src={image} alt="image" />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='bg-[#F5C5AA] px-8 py-1 rounded-xl'>
          ${price}.00
        </p>
        <button className='px-2 py-1 bg-[#F5C5AA] rounded-xl' onClick={() => addItem(name,price)}>Add to cart</button>
      </div>
      
    </div>
  )
}

export default Items
