import React, { useState } from 'react'
function Counter()
{
    const[count,setCount]=useState(0);
    return(
        <div><h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>update</button>
        </div>
    )
}

function NewHOC(props){
    return(
        <div style={{width:"100px",backgroundColor:"yellow"}}>
            {props.counter}
        </div>
        
    )
}
function RedHOC(props){
    return(
        <div style={{width:"100px",backgroundColor:"red"}}>
            {props.counter}
        </div>
        
    )
}
export default function HOC() {
  return (
    <>
   <NewHOC counter={<Counter/>}/><br></br>
   <RedHOC counter={<Counter/>}/>
  </>
  )
}
