import React, { useState } from 'react'

export default function FormSbmit() {
 const[name,setname]=useState("");
 const[interest,setInterest]=useState("");
 const[tc,settc]=useState(false);
    function getFormData(e){
    e.preventDefault();
    console.log(name,tc,interest);
 }
 
    return (
    <div className='container bg-primary'>
      <form onSubmit={getFormData}>
        <label>Name</label>
        <input type="text" onChange={((e)=>{setname(e.target.value)})}></input><br></br><br></br>
        <select onChange={((e)=>{setInterest(e.target.value)})}>
            <option>Maharashtra</option>
            <option>Goa</option>
            <option>Dubai</option>
        </select><br></br><br></br>
        <input type='checkbox'onChange={((e)=>{settc(e.target.checked)})}/><span>I Accept term and condition</span><br></br>
        <input type="submit" ></input>
        <button>Click</button>
      </form>
    </div>
  )
}
