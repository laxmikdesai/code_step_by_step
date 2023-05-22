import React from 'react'

export default function SubComponent(props) {
 const style={
    backgroundColor:"grey",
    margin:"4px",
    padding:"14px",
    color:"white",
    
 }
//  function hii()
//  {
//     alert("Welcome");
//  }
    return (
    <div className='container bg-success' style={{height:"300px"}}>
      <span style={style}>{props.name}</span>
      <span style={style}>{props.email}</span>
      <span style={style}>{props.contact}</span>
      {/* <button onClick={hii}>save</button> */}
      <button onClick={props.fun}>save</button>
    </div>
  )
}
