import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Abaut() {
  return (
    <div className='text-center'>
      <h1>Abaut Page</h1>
      <ul><li><NavLink  className="navbar-link" to="/user/anil" state={{name:"laxmi"}}>Anil</NavLink></li>
      <li><NavLink  className="navbar-link" to="/user/peter">peter</NavLink></li>
      <li><NavLink  className="navbar-link" to="/user.bruce" >bruse</NavLink></li>
      </ul>
    </div>
  )
}
