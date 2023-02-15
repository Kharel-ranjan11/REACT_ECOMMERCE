import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import './style.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4
}
export const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <nav className='innerNav shadow-1'>
        <div className='links '>
          <div className='nav-item'>
            <Link to='prod'   className='nav-link p-3  text-dark'>
              ProductList
            </Link>
            <Link to='filter' className='nav-link text-dark  p-3'>
              Filter Product
            </Link>
          </div>
          <div className='cart p-1'>
            <span className='cart_icon'>
              <i
                className='fas fa-cart-plus'
                style={{ position: 'relative' }}
                onClick={handleOpen}
              >
                <span className='position-absolute  translate-middle p-1 bg-danger border border-light rounded-circle'></span>
              </i>
            </span>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                Text in a modal
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                this is cart
              </Typography>
            </Box>
          </Modal>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
