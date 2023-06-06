import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Components/Images/logoBritam.png'

function NavbarCalc() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
        <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink exact to='/benefits'>Benefits</NavLink></li>
      <li><NavLink exact to='/travelCalculator'>Travel Calculator</NavLink></li>
      <li><NavLink exact to='/policies'>Policies and Terms</NavLink></li>
      <li><NavLink exact to='/kin'>Next of Kin</NavLink></li>
        </ul>
      </div>
      <img src={logo} className='w-20' alt='logo'></img>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><NavLink exact to='/'>Home</NavLink></li>
      <li><NavLink exact to='/benefits'>Benefits</NavLink></li>
      <li><NavLink exact to='/travelCalculator'>Travel Calculator</NavLink></li>
      <li><NavLink exact to='/policies'>Policies and Terms</NavLink></li>
      <li><NavLink exact to='/kin'>Next of Kin</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  )
}

export default NavbarCalc