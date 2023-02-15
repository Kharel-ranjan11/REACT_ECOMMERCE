import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Main/Main'
import { Products } from '../Products'
import { Scroll } from '../Scroll'
import { FilterProducts } from '../subhelper/FilterProducts'
import { Navbar } from '../subhelper/Navbar'
import { ProductList } from '../subhelper/ProductList'
export const Root = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/scroll' element={<Scroll />} />
        <Route path='/products/' element={<Products />}>
          <Route path='dash' element={<Navbar />}>
            <Route path='prod' element={<ProductList />}></Route>
            <Route path='filter' element={<FilterProducts />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}
