import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/admin">ADMINHome</NavLink></li>
        <li><NavLink to="/admin/createnew">Create Service</NavLink></li>
        <li><NavLink to="/admin/adminservice">Edit Service</NavLink></li>
        <li><NavLink to="/">Public</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavbarAdmin