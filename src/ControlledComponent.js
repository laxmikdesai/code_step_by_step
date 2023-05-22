//Controll component is controlled by react and un controll component is controll by DOM
import React, { useState } from 'react'

export default function ControlledComponent() {
 const[data,setData]=useState("Enter name");
    return (
    <div>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
      <h2>{data}</h2>
    </div>
  )
}
