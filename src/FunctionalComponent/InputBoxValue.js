import React, { useState } from 'react'

export default function InputBoxValue() {
const[name,updatename]=useState(null);
const[print,setprint]=useState(false);
    function   update(val){
    console.log(val.target.value);
   
    updatename(val.target.value);
    setprint(false);
}
    return (
    <div className='container bg-success'>{print? <h1>{name}</h1>:null}
       
      <input type="text"className='form-control' onChange={update}></input>
      <button className='btn btn-primary' onClick={(()=>setprint(true))}>Print</button>
    </div>
  )
}
