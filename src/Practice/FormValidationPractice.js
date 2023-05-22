import React, { useState } from 'react'

export default function FormValidation() {
 const[user,setUser]=useState("");
 const[Password,setPassword]=useState("");
  const[err,setErr]=useState(false);
 const[pswerr,setPassError]=useState(false);
 
 function getData(e)
  {
    if(user.length<3 || Password.length<8)
    {
      alert("Enter data")
    }
    else{
      alert(" Login successfully")
    }
     e.preventDefault();
  }
  function changeHandeler(e){
    console.log(e.target.value)
    let value=e.target.value;
    if(value.length<3)
    {
      setErr(true);
    }
    else
    {
      setErr(false);
    }
    setUser(value);
  }
 
  function errorHandeler(e){
    console.log(e.target.value)
    let value=e.target.value;
    if(value.length<8)
    {
      setPassError(true);
    }
    else
    {
      setPassError(false);
    }
    setPassword(value);
  }
 
  return (
    <div className='container bg-secondary'>
      <form onSubmit={getData}>
       Name: <input  className='my-3 mx-2 form-control' onChange={changeHandeler} type="text" placeholder='Enter name'></input>
       {err?<strong style={{color:"white"}}>Name is not valid</strong>:null}<br></br>
       Email:<input className='my-3 mx-2 form-control'onChange={errorHandeler}  type="text" placeholder='enter email'></input><br></br>
       {pswerr?<strong style={{color:"white"}}>Password hav minimum 8 charecter</strong>:null}<br></br>
     
       <input className='my-3 mx-2 btn btn-primary' type="submit"></input>
      </form>
    </div>
  )
}
