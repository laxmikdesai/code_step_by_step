import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Page from './Page';
import User from './User';
export default function MainFile() {
  return (
    <BrowserRouter>
       
        <div className='container border text-center'>
        <Navbar/>
     <Routes>
      
      <Route path="/home" element={<Home />}/>
      <Route path="/about" exact={true} element={<About /> } />
      <Route path="/*" exact={true} element={<Page /> } />
      <Route path="/user" exact={true} element={<User /> } />
   
</Routes>
     
    </div>
    </BrowserRouter>

  )
}

