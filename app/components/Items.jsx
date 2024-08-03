import React from 'react'

const Items = ({name, price}) => {
  return (
    <div className='flex justify-between'>
      <h4>{name}</h4>
      <h4>${price}</h4>
    </div>
  )
}

export default Items
