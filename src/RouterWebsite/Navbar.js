import React from 'react'
import{Link} from'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      <Link to="/userblock">UserBlock</Link>
    </div>
  )
}
