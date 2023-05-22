import React, { useState } from 'react'
import FormValidation from './FormValidationPractice';

export default function Toggle() {
const[count,setcount]=useState(0);
const[state,setState]=useState(false);

    return (
    <div>
       <h1>Welcome{count}</h1>
       {state?<FormValidation/>:<h1>Not occured</h1>}
       <button onClick={()=>setState(!state)}>Add/Remove</button>
      <button onClick={()=>setcount(count+1)}>Update</button>
    </div>
  )
}
