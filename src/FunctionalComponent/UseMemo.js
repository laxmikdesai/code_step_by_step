//use memo is use in functional component like we use pureComponent in classComponent unwantedly function is update like in this program increasecount is un wanted increase
import React, { useMemo, useState } from 'react'

export default function UseMemo() {
  const[count,setCount]=useState(0);
  const[item,increaseitem]=useState(100);
const Memofunction=useMemo( function increasecount(){
   
    console.log("increasecount() call");
    return count*5;
 },[count])
 
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update</button>
      <h1>{Memofunction}</h1>
      <h1>{item}</h1>
      <button onClick={()=>increaseitem(item*5)}>Updateitem</button>

    </div>
  )
}
