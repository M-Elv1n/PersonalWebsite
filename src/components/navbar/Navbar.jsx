import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/portfolios">Portfolios</NavLink></li>
            <li><NavLink to="/journey">Journey</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar