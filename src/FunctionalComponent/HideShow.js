import React, { useState } from 'react'

export default function HideShow() {
 const[show,setShow]=useState(true);

    return (
    <div>
        {show?<h1 className='bg-warning'>laxmi</h1>:null}
      
      {/* <button className='btn btn-primary mx-3' onClick={(()=>{setShow(false)})}>Hide</button>
      <button className='btn btn-primary mx-3'onClick={(()=>{setShow(true)})}>show</button>*/}
      <button className='btn btn-primary mx-3'onClick={(()=>{setShow(!show)})}>Toggle</button> 
      
    </div>
  )
}
