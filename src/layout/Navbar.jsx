import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/haveservice">Viborg Have Service</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
      </ul>
    </nav >
  )
}

export default Navbar