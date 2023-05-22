import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import "./Style.css";

//with Link ta we cannot use class so we use NavLink 
export default function NavBar() {
 
    return (
    <div className='container '>
      {/* <ul><li><Link to="/">Home</Link></li>
      <li><Link to="/abaut">Abaut</Link></li>
      <li><Link to="/user">User</Link></li>
      <li><Link to="/user/anil">Anil</Link></li>
      <li><Link to="/user/peter">peter</Link></li> */}
      <ul >
      <li><NavLink  className="navbar-link" to="/">Home</NavLink></li>
      <li><NavLink  className="navbar-link" to="/abaut">Abaut</NavLink></li>
      <li><NavLink  className="navbar-link" to="/user">User</NavLink></li>
      <li><NavLink  className="navbar-link" to="/contact">Contact</NavLink></li>
      <li><NavLink  className="navbar-link" to="/login">Login</NavLink></li>
      </ul>
    </div>
  )
}
