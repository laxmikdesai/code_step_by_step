import React from 'react'
import { BrowserRouter, Link, Route, Routes,Navigate } from 'react-router-dom'
import Home from './Home';
import Abaut from './Abaut';


import Page404 from './Page404';
import User from './User';
import NavBar from './NavBar';
import Filter from"./Filter"
import Contact from './Contact';
import Chanel from "./Chanel";
import Company from "./Company";
import Other from "./Other";
import Login from './Login';
import Protected from './Protected';
export default function Main() {
  return (
    <BrowserRouter>
  <NavBar/>
         <Routes>
        <Route path="/" element={<Protected Component={Home}/>} ></Route>
        <Route path="/abaut" element={<Abaut/>}></Route>
        {/* <Route path="/*" element={<h1>404 not found</h1>}></Route>
        <Route path="/*" element={<h1>404 not found</h1>}></Route> */}
        {/* <Route path="/*" element={<Page404/>}></Route> */}
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="/user" element={<Protected Component={User}/>}></Route>
        <Route path="/user/:name" element={<User></User>}></Route>
        <Route path="/user/:name" element={<User></User>}></Route>
        <Route path="/filter" element={<Filter/>}></Route>
       <Route path="/contact/" element={<Protected Component={Contact}/>}>
        <Route path="company" element={<Company/>}/>
        <Route path="chanel" element={<Chanel/>}/>
        <Route path="other" element={<Other/>}/>
        
       </Route>
       <Route path="/login" element={<Login/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}
