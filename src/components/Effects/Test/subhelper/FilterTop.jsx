import React from 'react'

export const FilterTop = () => {
  return (
    <div>
      <div>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search.....'
        />
      </div>
      <div className='grid'>
        <span>
          <i className='fas fa-th-list'></i>
        </span>
        <span>
          <i className='fas fa-grip-horizontal'></i>
        </span>
      </div>
    </div>
  )
}
