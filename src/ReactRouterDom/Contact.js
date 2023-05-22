import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Contact() {
const location=useLocation();
console.log(location);
  return (
    <div>
      <h1> Contact us page</h1>
      <h2>Here we have some other buziness</h2>
      <Link to="company" style={{margin:"5px"}}>Compony</Link>
      <Link to="chanel"  style={{margin:"5px"}}>chanel</Link>
      <Link to="other "  style={{margin:"5px"}}>other</Link>
      <Outlet/>
    </div>
  )
}
