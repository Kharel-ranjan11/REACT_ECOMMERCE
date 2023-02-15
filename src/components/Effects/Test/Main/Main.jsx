import React from 'react'
import { Navbar } from '../helpers/Navbar'
const LinksText = {
  scroll: {
    to: '/scroll',
    value: 'Scroll'
  },
  products: {
    to: '/products/dash',
    value: 'View Product'
  }
}
export const Main = () => {
  return (
    <>
      <Navbar LinksText={LinksText} />
    </>
  )
}
