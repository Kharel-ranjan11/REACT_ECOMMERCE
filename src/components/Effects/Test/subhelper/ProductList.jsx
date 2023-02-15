import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'
import { useGlobalContext } from '../ProductContext/Productcontext'
import './style.css'
export const ProductList = () => {
  const { products, isLoading } = useGlobalContext()
  console.log('From product list page', isLoading)
  return (
    <>
      <div
        className='cards'
        id='cards'
        style={{ height: '83.5%', overflowY: 'scroll', overflowX: 'hidden' }}
      >
        <div
          className={
            isLoading ? 'd-flex ' : 'row row-cols-1 row-cols-md-3 g-4 p-5'
          }
          style={
            isLoading
              ? { position: 'absolute', top: '50%', left: '50%' }
              : { paddingBottom: '20px' }
          }
        >
          {isLoading ? (
            <>
              <Box>
                <h4>Loading...</h4>
                <CircularProgress style={{ margin: '0px 30px' }} />
              </Box>
            </>
          ) : (
            products.map(({ image, price, name, company }, index) => (
              <div className='col' key={index}>
                <div className='card h-100'>
                  <div className='overlays'>
                    <img src={image} className='card-img-top' alt={image} />
                    <div className='overContent'>
                      <span>
                        <i className='fas fa-shopping-cart'></i>
                      </span>
                      <span>
                        <i class='fas fa-heart'></i>
                      </span>
                    </div>
                  </div>

                  <div className='card-body'>
                    <h5
                      className='card-title text-dark '
                      style={{ fontSize: '16px' }}
                    >
                      Product Name:
                      <span style={{ textTransform: 'capitalize' }}>
                        {name}
                      </span>
                    </h5>
                    <p className='card-text text-dark'>Price:{price}</p>
                  </div>
                  <div className='card-footer'>
                    <small className='text-dark'>
                      Company:
                      <span style={{ textTransform: 'capitalize' }}>{company}</span>
                    </small>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
