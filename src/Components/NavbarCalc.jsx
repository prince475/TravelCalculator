import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Components/Images/logoBritam.png";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import avatar from '../Components/Images/avatar.png'

function NavbarCalc() {
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const openRegistrationPopup = () => {
    setShowRegistrationPopup(true);
  }

  const closeRegistrationPopup = () => {
    setShowRegistrationPopup(false);
  }

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  }

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  }

  return (
    <div className="navbar bg-base-100" style={{ background: 'white', color: 'black' }}>
      <div className="navbar-start">
        <div style={{ marginLeft: '40px' }}>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/benefits">
                  Benefits
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/travelCalculator">
                  Travel Calculator
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/policies">
                  Policies and Terms
                </NavLink>
              </li>
              {/* <li>
              <NavLink exact to="/upload">
                Uploads
              </NavLink>
            </li> */}
            </ul>
          </div>
        </div>
        <img src={logo} className="w-20" alt="logo"></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/benefits">
              Benefits
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/travelCalculator">
              Travel Calculator
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/policies">
              Policies and Terms
            </NavLink>
          </li>
          {/* <li>
              <NavLink exact to="/upload">
                Uploads
              </NavLink>
            </li> */}
        </ul>
      </div>
      {/* <div className="avatar" onClick={openRegistrationPopup}>
        <div className="w-10 ml-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={avatar} alt="avat" />
        </div>
      </div> */}

      {showRegistrationPopup && (
        <RegisterModal openLoginPopup={openLoginPopup} />
      )}

      {showRegistrationPopup && (
        <RegisterModal closeRegistrationPopup={closeRegistrationPopup} />
      )}

      {showLoginPopup && (
        <LoginModal closeLoginPopup={closeLoginPopup} />
      )}

    </div>
  );
}

export default NavbarCalc;
