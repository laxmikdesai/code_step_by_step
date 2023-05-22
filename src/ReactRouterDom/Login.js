import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  function Login1(){
    localStorage.setItem('login',true);
    navigate('/');
  }
  
  useEffect(()=>{
     
      let login=localStorage.getItem('login');
      if(login)
      {
          navigate('/');
      }
  })
  return (

    <div className='container border my-5 '>
      <h1>Login</h1>
      Name:<input type="text" placeholder='Enter name'></input><br></br><br></br>
      Email:<input type="text" placeholder='Enter email'></input><br></br><br></br>
      <button onClick={Login1}>login</button>
    </div>
  )
}
