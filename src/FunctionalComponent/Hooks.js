import React,{useState} from 'react'

export default function Hooks() {
 const[data,Setdata]=useState("Anil");
    return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>Setdata("sidhu")}>update</button>
    </div>
  )
}
