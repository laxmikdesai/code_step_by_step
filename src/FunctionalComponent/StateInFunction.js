import React, { useState } from 'react'

export default function StateInFunction() {
  const[data,setData]=useState("Laxmi");

  function Updatedata(){
    setData("Amruta");
  }
  console.warn("----------------");
    return (
    <div>
<h1>{data}</h1>     
<button className='btn btn-success' onClick={Updatedata}>ClickMe</button> 


    </div>
  )
}
