import React, { useEffect } from 'react'

export default function User(props) {
   useEffect(()=>{
    alert("count is increase");
   },[props.count])
       return (
    <div>
      <h1>{props.count}</h1>
      <h1>{props.data}</h1>
    </div>
  )
}
