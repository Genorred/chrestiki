import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useLocation()
  return (
    <div className='navbar'>
      {navigate.pathname === '/history'
        ? <Link className='leftLink link disabledLink' to='/history'>История</Link>
        : <Link className='leftLink link' to='/history'>История</Link>
      }
      {navigate.pathname === '/login'
      ? ''
      : <div>
        {navigate.pathname === '/game'
        ? <Link className='game link disabledLink' to='/game'>Матч</Link>
        : <Link className='game link' to='/game'>Матч</Link>
            }
      </div>
      }
      {navigate.pathname === '/login'
        ? <Link className='rightLink link disabledLink' to='/login'>Новая игра</Link>
        : <Link className='rightLink link'to='/login'>Новая игра</Link>
      }
    </div>
  )
}

export default Navbar
