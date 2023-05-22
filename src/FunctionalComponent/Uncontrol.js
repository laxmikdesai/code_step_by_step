import React, { useRef } from 'react'

export default function Uncontrol() {
 let refProperty=useRef(null);
 let refProperty2=useRef(null);
    const getData=(e)=>{
    e.preventDefault();
    console.log(refProperty.current.value);
    console.log(refProperty2.current.value);
    console.log(document.getElementById("d1").value)
 }
    return (
    <div className='container bg-warning'>
        <form onSubmit={getData}>
      Name <input type="text" ref={refProperty}></input><br></br><br></br>
      Email <input type="text" ref={refProperty2}></input><br></br><br></br>
      Email <input type="text" id="d1"></input><br></br><br></br>
      <input type="submit"></input><br></br><br></br>
      </form>
    </div>
  )
}
