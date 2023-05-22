import React, { useEffect, useState } from 'react'

export default function UseEffect() {
 const[count,setdata]=useState(0);

    useEffect(()=>{
    console.log("useEffect");
  },[count])//[]=not update [count]=only this state is update then update
    return (
    <div>
      Welcome:{count}
      <button onClick={()=>setdata(count+1)}>update</button>
    </div>
  )
}
