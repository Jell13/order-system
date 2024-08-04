import React from 'react'

const Orders = ({id,name, total, items, handler}) => {
  return (
    <div className='w-full flex flex-col'>
        <h4 className='text-xl'>{name}</h4>
        <h4 className='text-xl'>Total: ${total}</h4>
        <div className='grid md:grid-cols-3 grid-cols-1 p-4'>
            {items.map(({item, image}) => (
                <div className='flex flex-col gap-2'>
                    <h4>{item}</h4>
                    <img className='md:w-[200px] w-[100px]' src={image} alt="image" />
                </div>
            ))}
        </div>
        <div className='flex justify-end pr-6 mb-4'>
          <button onClick={() => handler(id, total)} className='bg-[#EFE5DC] px-4 py-2 rounded-xl text-2xl'>Done</button>
        </div>
    </div>
  )
}

export default Orders
