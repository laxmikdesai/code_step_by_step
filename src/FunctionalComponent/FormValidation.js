import React, { useState } from 'react'

export default function FormValidation() {
const[user,setUser]=useState("");
const[password,setpassword]=useState("");
  const[err,showerr]=useState(false);
  const[Passworderr,showpwserr]=useState(false);
    function getData(e){
      if(user.length<3 ||password.length<5)
      {
        alert(" enter correct  value")
      }
      else{
        alert("Welcome user")
      }
        e.preventDefault();
        console.log(e.target.value);
   }
   function UseHandler(e){
    const item=e.target.value;
   if(item.length<3){
    console.log("Name invalid");
    showerr(true);
}
else{
    console.log("Name is valid");
     showerr(false);
}

setUser(item);
   }

   function PasswordHandler(e){
    const item=e.target.value;
   if(item.length<5){
    console.log("Password invalid");
    showpwserr(true);
}
else{
    console.log("password is valid");
    showpwserr(false);
}

setpassword(item);
   }

  function Login(e){

  }


    return (
    <div className='container bg-warning' style={{height:"500px",width:"400px"}}>
      <form onSubmit={getData}>
        <label>Name</label>
        <input type="text"  className='form-control my-3 ' placeholder='Enter youre name' onChange={ UseHandler}></input>
        
        {err?<strong>Name is invalid</strong>:""}
        
        <input type="password"  className='form-control my-3' placeholder='Enter youre password' onChange={PasswordHandler}></input>
        {Passworderr?<strong>Password is invalid</strong>:""}
        <br></br>
        
        <input type="submit" onChange={Login} className='my-5 btn-primary btn'></input>
      </form>
    </div>
  )
}
