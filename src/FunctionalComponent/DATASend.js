import React from 'react'

export default function DATASend(props) {
  const data="Laxmi Desai";
    return (
    <div>
   <h1>   hi i am child component </h1>
   <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}
