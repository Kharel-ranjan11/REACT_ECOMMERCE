import React from 'react'
import { Outlet } from 'react-router-dom'
import { Wrapper } from './helpers/Wrapper'
import { useGlobalContext } from './ProductContext/Productcontext'
import { Navbar } from './subhelper/Navbar'
export const Products = () => {
  // const {products} = useGlobalContext()
  // console.log(product)
  return (
    <>
      <Wrapper
        className='col-10 d-flex'
        id='product'
        style={{ overflow: 'hidden' }}
      >
        <div style={{ width: '200px', background: '#28243d' }}>
          <header>
            <div className='brand ps-1  d-flex  justify-content-left align-items-center'>
              <img
                src='https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png'
                alt=''
                className='img-fluid'
              />
              <span className='ms-2 fs-5 fw-bold'>SHOPIFY</span>
            </div>
          </header>
          <aside>
            <div className='links pt-4 d-grid  justify-content-left align-items-center'>
              <p>
                <i className='fas fa-tachometer-alt'></i> <span>Dashboard</span>
                <span
                  className='badge badge-danger ms-2 '
                  style={{
                    fontSize: '10px',
                    transform: 'translateY(-3px)',
                    background: '#ef5350',
                    color: 'white'
                  }}
                >
                  1
                </span>
              </p>
              <p>
                <i className='fas fa-plus-circle'></i>
                <span>Add Product</span>
              </p>
              <p>
                <i className='fas fa-envelope'></i>
                <span>Email</span>
                <span
                  className='badge badge-danger ms-2 '
                  style={{
                    fontSize: '10px',
                    transform: 'translateY(-3px)',
                    background: '#ef5350',
                    color: 'white'
                  }}
                >
                  1
                </span>
              </p>
              <p>
                <i className='fas fa-comment-alt'></i>
                <span>Chats</span>
                <span
                  className='badge badge-danger ms-2 '
                  style={{
                    fontSize: '10px',
                    transform: 'translateY(-3px)',
                    background: '#ef5350',
                    color: 'white'
                  }}
                >
                  1
                </span>
              </p>
              <p>
                <i className='fas fa-user-circle'></i> <span>Account</span>
              </p>
              <p>
                <i className='fas fa-cog'></i>
                <span>Setting</span>
              </p>
              <p>
                <i className='fas fa-sign-out-alt'></i>
                <span>Logout</span>
              </p>
            </div>
          </aside>
        </div>

        <div className='pages ms-0'>
          <div className='topSection'>
            <div
              className='search'
              style={{ color: 'rgb(166, 155, 242)', fontSize: '19px' }}
            >
              <span>
                <i className='fas fa-search'></i>
              </span>
            </div>
            <div className='icons'>
              <span className='theme'>
                <i className='fas fa-moon'></i>
              </span>
              <span className='notification'>
                <i className='fas fa-bell' style={{ position: 'relative' }}>
                  <span
                    className='position-absolute   translate-middle bg-danger border border-light rounded-circle'
                    style={{ padding: '5px' }}
                  ></span>
                </i>
              </span>
              <span className='user'>
                <i
                  className='fas fa-user-alt'
                  data-mdb-toggle='tooltip'
                  title='Ranjan kharel'
                ></i>
              </span>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </Wrapper>
    </>
  )
}

// for card bg color #28313f
