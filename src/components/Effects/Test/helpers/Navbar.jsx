import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = ({ LinksText }) => {
  console.log(LinksText)
  return (
    <>
      <nav className='navbar sticky-top' style={{ background: '#1976d2' }}>
        <div className='container-fluid '>
          {LinksText.scroll && (
            <Link
              to={LinksText.scroll.to}
              className='text-white  ms-auto border border-end-1 border-start-0 border-top-0 border-bottom-0 p-1'
            >
              {LinksText.scroll.value}
            </Link>
          )}
          {LinksText.products && (
            <Link
              to={LinksText?.products.to}
              className='text-white  me-auto p-1'
            >
              {LinksText.products.value}
            </Link>
          )}
        </div>
      </nav>
    </>
  )
}
