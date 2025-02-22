import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import { isAction } from '@reduxjs/toolkit'
function NavBar() {
  return (
    <div><ul>
      <li>
        < NavLink to="/"
          className={({ isActive }) => {
            return isActive ? "active-link" : ""
          }}>Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutme" className={({ isActive }) => {
          return isActive ? "active-link" : ""
        }}>User details
        </NavLink>
      </li>
      <li>
        <NavLink to="/goals" className={({ isActive }) => {
          return isActive ? "active-link" : ""
        }}>Goals
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className={({ isActive }) => {
          return isActive ? "active-link" : ""
        }}>signIn
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" className={({ isActive }) => {
          return isActive ? "active-link" : ""
        }}>SignUP
        </NavLink>
      </li>
    </ul>

    </div>
  )
}

export default NavBar
