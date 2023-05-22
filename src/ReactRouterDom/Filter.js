//When we get data from url in query param then we use useparam for set data and get data
import React from 'react'
import { useSearchParams } from 'react-router-dom'


export default function Filter() {
    const[searchparam,setParam]=useSearchParams();
    console.log(searchparam.get('age'));
  return (
    <div>
      <h1>Filter page</h1>
      <button onClick={()=>setParam({age:10})}>click</button>
      <input type="text" onChange={(e)=>setParam({text:e.target.value})}></input>
    </div>
  )
}
