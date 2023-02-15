import React from 'react'
import { FilterDown } from './FilterDown'
import { FilterTop } from './FilterTop'

export const FilterProducts = () => {
  return (
    <>
      <div className='filterProducts text-dark' style={{background:'#f7f7f8'}}>
        <FilterTop />
        <FilterDown />
      </div>
    </>
  )
}
